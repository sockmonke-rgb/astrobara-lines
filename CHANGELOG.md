# Changelog

## 5.51
- **The ship you pick is drawn on top.** It used to sit under the place it was docked at, and under its line's other ships when they stacked up. Now it's above everything, number badge included.
- **See what a picked ship carries.** A pill beside its number shows each piece of freight in its destination's shape and colour, plus a faint dot per free slot. The line panel swaps "back & forth · holds 40" for that ship's load, e.g. 5★ 2◆ · 7/12. Tap its number again to go back. Handy before taking a ship off, since its freight is dropped where it is.

## 5.50
- **Proxima b is the ringed planet.** Its freight now shows a tiny ringed planet too, so it can't be mistaken for a green world's freight or Earth's. Both were teal-ish circles that looked almost the same at freight size. The Help key and the notes use the same icon.

## 5.49
- **Report a problem.** ≡ → **Report** (it was Diag) has a box to say what happened, an optional email for a reply, and **⚑ Send report**. The report carries the game's version, browser, screen, recent log and any errors, and with **Include run** on (the default), the run itself, so it can be loaded exactly as it was. What gets sent · copy shows all of it, with Copy diagnostics and Copy save as before.
- The Network Lost card's Copy diag is now **⚑ Report**, and opens the same tab. Inside Claude it still copies the diagnostics straight away.
- Reports go to a small Cloudflare Worker that files each one as an issue in a private repo (`report-worker/`, with setup steps). Until it's live, or if it can't be reached, Send copies the report and offers a GitHub issue instead.
- A pasted save that arrives in parts (a big one from a report) loads as one.

## 5.48
- **Normal and Hard.** Pick on the start screen; it's remembered. **Hard** is the tuning you've been playing: upkeep up to 60% of earnings, long lines without a ◆ fuel stop run 30% slower, breakdowns late in a run, and the late red ring closes in 20s. **Normal** is gentler: upkeep capped at 35% with a smaller share per ship, no fuel slowdown, breakdowns about 2.5× rarer, and the red ring stays at 30s. Everything else is the same.
- New players start on Normal. Runs saved before 5.48 continue on Hard, since that's how they were played. Same code again and playing a code from the leaderboard keep that run's difficulty. The leaderboard marks hard runs, and the date line says "· hard" during one.
- Uncharted's button now says "random · busier" so it doesn't read like the Hard setting.

## 5.47
- The ≡ menu (Timeline, Log, Help, Diag, Start screen) no longer disappears while a line or place is selected. It used to hide to make room for the bar. The bar still scrolls sideways if it's too long for the screen.

## 5.46
- **Map key** at the top of Help (≡ → Help) says what each mark on the map means: rings round places, Storage, fast dock ››, toll %, damage, unrest flags, the crossed-out ◆ on a line with no fuel, ship badges and rings, storms, NEW, and the edge arrows.
- Mouse hover notes say more. A place mentions a toll, a strike, a rush or stuck freight. A line mentions no fuel (with the ◆ to add) and ships breaking down.

## 5.45
- Fixed: on a crowding or overflow note that suggests a ◆ fuel stop, Show went to that ◆ (e.g. Quarry Well) instead of the place in trouble. It goes to the crowded place again; the ◆ to add is still named in the note.

## 5.44
- A ship you've just added is picked straight away, so a +pod right after goes to it rather than to the line's emptiest ship.

## 5.43
- Tap a note at the top to go to what it's about. The view switches system if needed, moves to the place and opens it, or opens the line. This works for every note that names a place or line: needs a line, a line with no ship, crowding and overflow, storms, stuck freight, breakdowns, damage, unrest, a place about to open, and new places and wormholes. Notes about nothing in particular, like a spare pod, stay as they are. Show, Repair and Negotiate work as before.

## 5.42
- The backing behind waiting freight is lighter and rounder: a half-transparent shadow that follows the shapes instead of a solid box, so the line underneath still shows. The shapes' dark edges are a touch thinner.

## 5.41
- The freight waiting at a place now sits on a small dark plate, and each shape has a thin dark edge, so you can tell the shapes apart where a line runs underneath.

## 5.40
- When you arrive in a system, a place with more than one problem gets a single label with them joined, e.g. "overflowing 14/10 · needs a line", in the colour of the most urgent. Before, the labels were drawn on top of each other. Labels for places close together stack instead of overlapping. The note at the top reads the same, and "+N more" counts other places.

## 5.39
- The Alliance Shop always lists all nine things. What you can't buy right now is greyed out and says why: "maxed", "all 9 lines", or how much more money you need. Tap it for the reason. Before, maxed things disappeared.
- Storage is marked "was Depot" in the shop for now, since it was renamed in 5.36.

## 5.38
- **Pick a ship.** Tapping a ship out on its line selects the line with that ship picked: it gets a white ring, and its number is marked in the bar. You can also tap the ship numbers in the bar. +pod then goes to that ship, and −ship takes that ship off. If the picked ship already has all its pods, it says so instead of giving the pod to another ship. With no ship picked, it works as before: the ship with the fewest pods gets it.

## 5.37
- A place now counts as crowding only when it's at least three quarters full, as well as within 3 loads of full (5 late in a run). Late in a run, 10/14 or 6/10 no longer says crowding; 11/14 and 8/10 do. Bigger places keep the same margin. It's only the warning: the red ring still starts once a place is over full.

## 5.36
- The spare that gives a place more room is now called **Storage**, not Depot, so it can't be confused with ◆ Fuel depots. Those are places on the map that a long line needs as a stop. Buying Storage never fuelled a line.
- Fuel advice names the nearest open ◆ to add, e.g. "Orange has no ◆ fuel, runs slow · add ◆ Wick Well to it", with Show. So do the crowding note, the fix suggestion, the tip and the line's info.
- In a system where no ◆ has opened yet, long lines aren't slowed, since there's nothing you could do about it. Once one opens, they are.

## 5.35
- The **right mouse button** pans the map too: hold it and drag from anywhere. Pressed while you're drawing with the left button, it still cancels the line.

## 5.34
- On a computer, hold the **middle mouse button** and drag to pan the map from anywhere, even over a place or a line. It never draws or selects anything, and doesn't trigger the browser's autoscroll. The left button still draws, the right button cancels, and dragging empty space still pans.

## 5.33
- While you draw a new line or reshape one with the mouse, **Esc** or the **right mouse button** cancels it and leaves everything as it was, with no redraw fee. Right-click on the map no longer opens the browser's menu or starts a drag.
- The help no longer says going back to the start cancels a line. With three or more stops that makes a loop. Going back over the stops one by one takes them off.

## 5.32
- **Choose where a new ship starts.** Tap a line, then +⛴: the bar lists the line's stops with how much is waiting at each, and the busiest is highlighted. Tap one, or tap the stop on the map; the line's stops pulse while you choose. × cancels. A ship that starts mid-line heads the way most of the freight there is going. The walkthrough keeps the one-tap add.
- On a computer, a click on the map clears a tip, the same as its ×. Warnings without an × (overflow, storms, stuck freight, breakdowns) stay, and so does the "drag here" guide. Taps on phones and tablets are unchanged.

## 5.31
- **Bigger upkeep that grows with your network.** At each Alliance Shop visit, upkeep is now a share of what the network earned since the last one: a few percent for each ship at work (a pod counts as part of a ship), more per ship as the fleet grows, up to 60%. Before, it was a small fixed price per ship, so in Uncharted and Proxima, where loads pay more, it was only about 7% of income. Now it's about half of income in the middle of a run in every system. It eases in over the first two visits instead of ten, and since it never takes more than the network brought in, it can't sink a run.
- The shop shows upkeep as a share of what you earned, e.g. "upkeep −$420M (55%)".

## 5.30
- On a computer, clicking the map around the start screen does what its main button does: Continue your saved run, the walkthrough the first time on Earth–Moon, or Play. Clicks on the card itself, and taps on phones and tablets, are unchanged.

## 5.29
- On a computer, clicking the map around a panel closes it, the same as its Close or Not now: the ≡ menu (Timeline, Log, Help, Diag), talks, the 5× question and the leaderboard. The Alliance Shop and the end-of-run card wait for a choice. Phones and tablets are unchanged, so a stray tap can't close anything.

## 5.28
- When the game is paused, the world stands still: a pulsar's beams, a binary pair's orbit, wormhole swirls, the Visitor Gate's pulse, and storm and debris drift all stop, and pick up again on ▶. Warnings and hints still blink so they catch your eye.

## 5.27
- Diagnostics name each place and its kind ("R1 Tarn Yard (Station)"), so they match the log, and mark places with no line. Shapes in notes read as words ("no line reaches [Fuel depot]") instead of vanishing.
- A loaded save's diagnostics still say where and why the run was lost.

## 5.26
- The Network Lost card has **Copy diag**: one tap copies the diagnostics to paste to Claude, and opens them so you can press and hold to copy if your phone blocks it. (The ≡ menu sits behind the card, so it wasn't reachable there.)
- Diagnostics say more about a loss: what the crowded places were waiting to send, stuck loads and queues, where ships left full, each line's length, fuel and breakdowns, and why the run was lost.

## 5.25
- A crowding or overflowing place says why, the most direct cause first, with what helps: a neighbour that declared independence (with Negotiate), a storm closing its lines, stuck freight, ships queueing for berths, ships leaving it full on a named line (and whether that line has no ◆ fuel stop), a line with no fuel, or a broken-down ship (with Repair).
- The Network Lost card says what the waiting loads mostly were and why the place filled up.
- A long line with no ◆ fuel stop wears a small crossed-out diamond halfway along it, so you can see it without selecting the line.

## 5.24
- A place that has cleared but whose red ring is still draining no longer counts as overflowing: the labels when you arrive in a system say "clearing" (or "crowding · ring 40%" if it's close to full again), the ⇄ button and edge arrows stay calm, and the draining ring is drawn fainter than a filling one.

## 5.23
- The game notices when a newer version is out: the start screen shows Update to …, and a running game gets one note saying where to find it. Your run is saved before it reloads. (Phones can keep an old copy for a while otherwise.)
- Tapping a broken-down ship, or its wrench, opens its line, with Repair first in the bar.
- A line's info note reads properly again ("3 ships · 🔧 ship 2 stopped: Repair · both ways · holds 30").

## 5.22
- A breakdown can be fixed: tap the ship's line and Repair, or Repair on the note, at a storm repair's price. Repairing during the warning heads it off. Or wait it out.
- A selected line's ends are easier to grab: anywhere near either knob (about twice the usual reach), or by dragging from the place the line ends at. A soft ring shows the reach. A tap on that place still opens the place, and with no line selected nothing changes.

## 5.21
More friction, with a way through every time.
- **Upkeep.** Ships and pods at work cost upkeep at each Alliance Shop visit, at that time's prices. It eases in over the first ten periods, and the top right shows the next bill. The budget can go below zero; then nothing can be bought until deliveries bring it back.
- **Fuel.** A long line with no ◆ fuel depot among its stops runs 30% slower. Its bar says so.
- **Berths.** A place loads three ships at once (a wormhole five). The rest queue just outside. A fast dock adds two berths. When ships are queueing, the overflow note suggests a fast dock or pods instead of more ships.
- **Breakdowns.** Late in a run a ship now and then breaks down: a warning, then it stops for 20 seconds. Ships on busy lines are likelier to go.
- **Rushes and strikes.** Late in a run some events are swings in demand. In a rush, nearly all of one place's freight heads for the kind of place farthest from it. In a strike, a place takes no deliveries for 30 seconds and freight for it goes to another place of its kind that your lines already reach.
- **Faster rings.** Late in a run the red ring fills in 20 seconds instead of 30, and places count as crowding 5 short of full instead of 3.
- **Redraws.** Changing a line you already have costs a little, never more than you have. Undo gives it back. Drawing a new line is free.
- **Stuck freight.** When loads at a place can't board anything, because no line reaches their kind of place or no ship goes their way, a note says where and why, with Show.

## 5.20
- Loops no longer strand freight. Freight only boards a ship whose next stop gets it closer, so on a loop where every ship went the same way round, a stop could pile up loads that no ship would ever take. Now a load rides the long way round when no ship comes the short way.
- A loop's ships stay split between the two ways round. If they bunch up going one way (closing a line into a loop while its ships head the same way, or taking a ship off), one turns round at its next stop.
- The overflow note suggests only what you can do: add a spare ship, pod or depot, draw a line, move a ship over from another line, or extend a line. It no longer suggests a depot where one is already built.

## 5.19
- A place overflowing is now the top note, ahead of storms and hints. It's red, counts down the seconds before the run ends, and has Show to take you there.
- When an overflow starts somewhere you could miss it (in another system, or anywhere at 3× and up), the game pauses, as it does for new places. Turn it off in the speed menu.

## 5.18
- Talks show your budget in large figures at the top, next to the countdown, so you can see it before you pay.

## 5.17
- With a mouse, resting on a button, the top strip, a place, a line, a line's end or a sensor shows a note saying what it is and what a tap does. The cursor changes over things you can tap or drag. Phones and tablets are unchanged.

## 5.16
- Earth–Moon runs get a second wormhole: in 2200 the Rift opens at Proxima, out to a random uncharted system with its own star, places and visitors. It brings 2 lines and 2 ships, and room for 3 more lines (up to 15).
- With three systems, ⇄ opens a short list of them, each marked with what needs you there.
- A run saved before 5.16 that's already past 2200 gets the Rift 30 seconds after you continue.
- A new award, Three Stars: lines running in three star systems at once.
- Run codes still play the same maps.

## 5.15
- Each thing in the shop's buy row says how many you already have: spares, free lines, or the level of an upgrade. It counts up when you buy one.
- The shop's "earned" counts what deliveries paid since the last visit, so repairs and talks in between no longer make it read negative.

## 5.14
- The start screen looks the same held upright or on its side. When there's less room it shrinks to fit rather than dropping the helmet and lines.
- Show (and Repair) on the note at the top glides over to the place and zooms in on it. Fit brings the whole map back.
- Buying in the shop loops the line round the thing you bought, not the first item in the row.

## 5.13
- Ships run along the start screen's lines.
- Tapping a button sends a line round it: orange when you pick something (a start, a tab, a speed, a shop pick, a term in talks), cyan when you do something (Play, Go, the bottom bar). Buttons that leave the start screen wait a beat for theirs.
- Every card has the navy glow and runs on a cyan-and-orange line pair along its bottom edge, drawn in as it opens. A lost network's lines are dimmed.

## 5.12
- The start screen wears the icon: a navy glow, stars, and the cyan and orange lines running behind a bigger capybara helmet. The lines draw themselves in when the game opens.

## 5.11
- ≡ → Diag tab: copy a diagnostics report (version, device, frame rate, run state, recent log, errors) and, optionally, the save itself, compressed.
- A clearer glass reflection on the capybara's helmet.
- Add to Home Screen gives the game its own capybara icon and opens it full screen. Links to the game show a preview card.

## 5.10
- Line ends are round pull knobs, set clear of the place they hang off. Grabbing the knob always extends that line; dragging from a place always starts a new one. The tag by your finger says which.
- Desktop keys: <kbd>Space</kbd> plays or pauses, <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>5</kbd> set the speed, <kbd>Esc</kbd> closes the bar.

## 5.9
- Renamed **Astrobara Lines**. The Lagrange Alliance stays in the game as the alliance you ship for. No capybara heads on the ships.

## 5.8
- Drag a line's end back along it to cut off as many stops as you like, with a one-time hint.
- The selection bar's info wraps onto two lines, and tapping it shows it in full. Undo and Fit shrink to icons while a bar is open.
- First Billion and Ten Billion awards now go by the budget.

## 5.7
- 5× speed (asks first).
- An opening act: a surge, then a storm, both on your own lines, before the second shop.
- Capybaras: the guide, the shop's quartermaster, a capybara envoy in talks, a pop-up every 250th load, a sad capybara when a run is lost, and hot-spring crazes.

## 5.6
- Reviews are a celebration: the map bursts gold, then a card types out the run.
- 21 awards, with a gallery.
- Arriving in a system brackets whatever needs you there.
- Storms you're fully protected from stay quiet.
- The bottom row scrolls when it's full.

## 5.5
- Losing a run is a two-beat ending (the map goes dark, then NETWORK LOST types itself out).
- A leaderboard: one row per run code, local and shared.

## 5.4
- The game pauses for votes and declarations of independence.
- Scrap spares for cash.
- Repair and settlement costs rise steadily instead of exponentially.
- The system switch keeps flashing while anything over there needs you.

## 5.3
- Feedback when deploying from the bottom bar: the button pops, a chip rises, and the map bursts where it landed.

## 5.2
- Pause when a new place opens, with rings around any place not yet on a line.

## 5.0 – 5.1
- Restless places, independence, and talks with several terms. They may refuse.
- Fast docks per place; sensors in other systems.
- All of these are late-game only.

## 4.0 – 4.9
- Saves (local and cloud), run codes, and Proxima and Uncharted starts.
- Random harder systems with visitors, twin flares and wormholes.
- Parallax backdrop, the start screen, and banking interest at the shop.

## 3.8 – 3.9
- The wormhole to Proxima Centauri.
