# Daily Pema

An iOS home screen widget that displays a new Pema Chodron quote each day.

Quotes sourced from this WordPress site: [Daily Pema](https://dailypema.wordpress.com/).
Instructions: https://kellychoffman.github.io/daily-pema/

## Preview

This is what my homescreen looks like with the widget. Very zen.

<img width="203" alt="Screenshot 2026-04-17 at 10 19 27 AM" src="https://github.com/user-attachments/assets/56dcf1cb-d622-4ed9-87c9-246006906fdb" />
<img width="203" alt="IMG_2162" src="https://github.com/user-attachments/assets/0f5fcb63-d159-48f7-b56c-6505e515012f" />

## Setup

1. Install [Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188) from the App Store (free)
2. Open Scriptable and tap **+** to create a new script
3. Copy the contents of [`DailyPema.js`](DailyPema.js) and paste it in
4. Name the script **DailyPema**
5. Go to your home screen, long-press to enter edit mode
6. Tap **+** in the top corner, search for **Scriptable**, and add a widget
7. Long-press the widget, tap **Edit Widget**
8. Set **Script** to **DailyPema**

The widget shows a new quote each day and caches quotes locally for offline use.

## Refreshing quotes

If new quotes are added to the source site, you can re-scrape them:

```
node scripts/scrape.js
```

This updates `quotes.json`. Push the changes to GitHub and the widget will pick them up automatically.
