# Changelog

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
