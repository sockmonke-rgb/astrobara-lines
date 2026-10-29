// Astrobara Lines · report relay
// A Cloudflare Worker. The game's Report tab sends a report here, and this files it as an issue in a
// private GitHub repo, so players need no account and the GitHub token never sits in the game's code.
//
// Setup (see SETUP.md): paste this file into a new Worker, then add one secret, GITHUB_TOKEN: a
// fine-grained token with Issues: read and write on the reports repo only. Open the Worker's URL in a
// browser to check it: it says "✓ Ready" when the token and repo are right.
//
// Optional variable REPO overrides the repo below (owner/name).

const REPO = 'sockmonke-rgb/astrobara-reports';

const LIMIT = {
  body: 400_000,      // whole request, bytes
  msg: 4_000,         // the player's note
  mail: 200,
  title: 140,
  diag: 40_000,       // the diagnostics text
  save: 300_000,      // the compressed save
  perIp: 5,           // reports per IP...
  perIpWindow: 600,   // ...per 10 minutes
  perHour: 60,        // and per hour from everyone (per Worker instance)
};
const ISSUE_MAX = 60_000;   // GitHub allows 65,536 characters in an issue or comment; keep clear of it

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};
const reply = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

// A simple rate limit kept in memory. It's per Worker instance, so it isn't exact, but it stops one
// person or script from flooding the inbox.
// Setup checks (GET) are counted apart from reports, so checking the URL never blocks a report.
const hits = new Map(); let hour = [];
function limited(ip, check) {
  const now = Date.now() / 1000, key = (check ? 'check:' : 'report:') + ip;
  if (!check) hour = hour.filter(t => now - t < 3600);
  const mine = (hits.get(key) || []).filter(t => now - t < LIMIT.perIpWindow);
  if (mine.length >= (check ? 20 : LIMIT.perIp) || (!check && hour.length >= LIMIT.perHour)) { hits.set(key, mine); return true; }
  mine.push(now); if (!check) hour.push(now); hits.set(key, mine);
  if (hits.size > 5000) hits.clear();
  return false;
}

const str = (v, n) => (typeof v === 'string' ? v : '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').slice(0, n);
// A code fence longer than any run of backticks inside, so the text can't break out of its block.
// Inside a block, @names, links and images don't do anything.
function block(text, lang = 'text') {
  const runs = text.match(/`+/g) || [];
  const fence = '`'.repeat(Math.max(3, ...runs.map(r => r.length + 1)));
  return `${fence}${lang}\n${text}\n${fence}`;
}

async function github(env, path, init = {}) {
  return fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'astrobara-lines-report',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });
}

export default {
  async fetch(req, env, ctx) {
    const repo = (env.REPO || REPO).trim();
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    const ip = req.headers.get('CF-Connecting-IP') || 'unknown';

    // Opening the URL in a browser checks the setup.
    if (req.method === 'GET') {
      if (!env.GITHUB_TOKEN) return new Response('✗ Not ready: add the GITHUB_TOKEN secret (Settings → Variables and Secrets).', { status: 503, headers: CORS });
      if (limited(ip, true)) return new Response('Too many checks, try again in a few minutes.', { status: 429, headers: CORS });
      const r = await github(env, `/repos/${repo}`);
      if (r.ok) return new Response(`✓ Ready. Reports go to ${repo} as issues.`, { headers: CORS });
      const why = r.status === 401 ? 'the token is wrong or expired'
        : r.status === 404 ? `the token can't see ${repo} (check the repo name, and that the token is limited to that repo)`
        : `GitHub said ${r.status}`;
      return new Response(`✗ Not ready: ${why}.`, { status: 503, headers: CORS });
    }
    if (req.method !== 'POST') return reply({ ok: false, why: 'method' }, 405);

    const text = await req.text();
    if (text.length > LIMIT.body) return reply({ ok: false, why: 'too big' }, 413);
    let r; try { r = JSON.parse(text); } catch (_) { return reply({ ok: false, why: 'bad json' }, 400); }
    if (!r || typeof r !== 'object') return reply({ ok: false, why: 'bad json' }, 400);
    if (r.hp) return reply({ ok: true });   // the hidden field only a bot fills in: say thanks, file nothing
    if (!env.GITHUB_TOKEN) return reply({ ok: false, why: 'setup' }, 503);
    if (limited(ip)) return reply({ ok: false, why: 'slow down' }, 429);

    const v = str(r.v, 20), msg = str(r.msg, LIMIT.msg).trim(), mail = str(r.mail, LIMIT.mail).trim();
    const diag = str(r.diag, LIMIT.diag), save = str(r.save, LIMIT.save), from = str(r.from, 80);
    if (!msg && !diag) return reply({ ok: false, why: 'empty' }, 400);
    let title = str(r.title, LIMIT.title).replace(/\s+/g, ' ').replace(/@/g, '@​').trim() || `Report · v${v}`;

    const parts = [];
    parts.push(`**Note**\n${msg ? block(msg) : '_(none)_'}`);
    if (mail) parts.push(`**Reply to**\n${block(mail)}`);
    parts.push(`v${v || '?'}${from ? ` · from ${from.replace(/[^\w.:-]/g, '')}` : ''}`);
    if (diag) parts.push(`<details open><summary>Diagnostics</summary>\n\n${block(diag)}\n</details>`);
    let body = parts.join('\n\n');

    // The save goes in the issue if it fits, otherwise in comments right after it, in order.
    const extra = [];
    if (save) {
      const kb = Math.round(save.length / 1024);
      const inline = `\n\n<details><summary>Save · ${kb} KB</summary>\n\n${block(save)}\n</details>`;
      if (body.length + inline.length < ISSUE_MAX) body += inline;
      else {
        const size = ISSUE_MAX - 400, n = Math.ceil(save.length / size);
        for (let k = 0; k < n; k++) extra.push(`<details><summary>Save · part ${k + 1} of ${n}</summary>\n\n${block(save.slice(k * size, (k + 1) * size))}\n</details>`);
        body += `\n\n_Save (${kb} KB) is in the ${n} comments below. Join the parts in order, with no line breaks between them._`;
      }
    }
    if (body.length > ISSUE_MAX) body = body.slice(0, ISSUE_MAX - 40) + '\n\n_(cut short)_';

    const res = await github(env, `/repos/${repo}/issues`, { method: 'POST', body: JSON.stringify({ title, body }) });
    if (!res.ok) {
      console.log('GitHub refused the issue', res.status, await res.text().catch(() => ''));
      return reply({ ok: false, why: 'github', status: res.status }, 502);
    }
    const issue = await res.json();
    if (extra.length) ctx.waitUntil((async () => {
      for (const c of extra) {
        const cr = await github(env, `/repos/${repo}/issues/${issue.number}/comments`, { method: 'POST', body: JSON.stringify({ body: c }) });
        if (!cr.ok) { console.log('GitHub refused a save comment', cr.status); break; }
      }
    })());
    return reply({ ok: true, n: issue.number });
  },
};
