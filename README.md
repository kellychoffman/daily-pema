# Daily Pema

An iOS home screen widget that displays a new Pema Chodron quote each day.

Quotes sourced from my WordPress site: [Daily Pema](https://dailypema.wordpress.com/).

## Preview

This is what my homescreen looks like with the widget. Very zen.

<img width="203" alt="Screenshot 2026-04-17 at 10 19 27 AM" src="https://github.com/user-attachments/assets/56dcf1cb-d622-4ed9-87c9-246006906fdb" />
<img width="203" alt="IMG_2162" src="https://github.com/user-attachments/assets/0f5fcb63-d159-48f7-b56c-6505e515012f" />

## Setup

The [setup page](https://kellychoffman.github.io/daily-pema/) walks you through it with a one-tap "copy script" button.

To do it manually:

1. Install [Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188) from the App Store (free)
2. Copy the contents of [`DailyPema.js`](DailyPema.js)
3. In Scriptable, tap **+** to create a new script and paste the code in
4. Tap the script's title at the top of the editor and rename it to **DailyPema**, then tap **Done**
5. On your home screen, long-press an empty area, tap **+**, search for **Scriptable**, pick a widget size, and tap **Add Widget**
6. Long-press the new widget, tap **Edit Widget**, and set **Script** to **DailyPema**

The widget shows a new quote each day and caches quotes locally for offline use.

## Refreshing quotes

If new quotes are added to the source site, you can re-scrape them:

```
node scripts/scrape.js
```

This updates `quotes.json`. Push the changes to GitHub and the widget will pick them up automatically.
