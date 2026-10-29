# Report relay setup

The game's **≡ → Report** tab sends reports to a small Cloudflare Worker, which files each one as an issue in a private GitHub repo. Players don't need an account, and the GitHub token stays in Cloudflare rather than in the game's code. Both are free at this scale.

Until the Worker is live, Report still works: it copies the report and offers to open a GitHub issue instead.

## 1. A private repo for reports

On GitHub: **+ → New repository** → name it `astrobara-reports` → **Private** → **Create repository**.

Reports go here rather than to `astrobara-lines`, because that repo is public and reports hold players' notes, email addresses and device details. GitHub notifies you of new issues in your own repos, so reports reach you by email or the GitHub app.

## 2. A token that can only file issues there

GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**:

- **Name:** `astrobara-report`
- **Expiration:** the longest offered (put a reminder in your calendar to renew it)
- **Repository access:** Only select repositories → `astrobara-reports`
- **Permissions → Repository permissions → Issues:** Read and write

**Generate token** and copy it. GitHub shows it once.

## 3. The Worker

1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com) on the free plan.
2. **Workers & Pages → Create → Create Worker** (start from Hello World), name it `astrobara-report`, **Deploy**.
3. **Edit code**, select all, paste the whole of [`worker.js`](worker.js), **Deploy**.
4. The Worker's **Settings → Variables and Secrets → Add**: type **Secret**, name `GITHUB_TOKEN`, value the token from step 2. Save and deploy.
5. Open the Worker's URL (`https://astrobara-report.<your-subdomain>.workers.dev`) in a browser. It should say **✓ Ready**. If not, it says what's wrong.

## 4. Point the game at it

Set `REPORT_URL` near the top of the game's script in `index.html` to that URL, and push.

## Limits

- Five reports per player per 10 minutes, 60 an hour in total. A hidden field catches simple bots.
- A report is at most 400 KB. The save goes in the issue when it fits, otherwise in comments right after it.
- Cloudflare's free plan allows 100,000 requests a day. Past that, requests fail until midnight UTC; nothing is ever charged.

## When the token expires

The URL check will say the token is wrong or expired, and the game falls back to copying the report. Make a new token (step 2) and replace the `GITHUB_TOKEN` secret (step 3.4). Nothing in the game changes.
