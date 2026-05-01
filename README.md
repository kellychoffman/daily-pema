# Daily Pema

An iOS home screen widget that displays a new Pema Chodron quote each day.

Quotes sourced from my WordPress site: [Daily Pema](https://dailypema.wordpress.com/).

## Preview

This is what my homescreen looks like with the widget. Very zen.

<img width="203" alt="Screenshot 2026-04-17 at 10 19 27 AM" src="https://github.com/user-attachments/assets/56dcf1cb-d622-4ed9-87c9-246006906fdb" />
<img width="203" alt="IMG_2162" src="https://github.com/user-attachments/assets/0f5fcb63-d159-48f7-b56c-6505e515012f" />

## Setup

The easiest way to install is through the [setup page](https://kellychoffman.github.io/daily-pema/), which walks you through it on your iPhone.

If you'd rather do it manually:

1. Install [Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188) from the App Store (free)
2. On your iPhone, open this link to import the script directly into Scriptable: [scriptable:///add?scriptURL=https%3A%2F%2Fraw.githubusercontent.com%2Fkellychoffman%2Fdaily-pema%2Fmain%2FDailyPema.js](scriptable:///add?scriptURL=https%3A%2F%2Fraw.githubusercontent.com%2Fkellychoffman%2Fdaily-pema%2Fmain%2FDailyPema.js)
3. On your home screen, long-press an empty area, tap **+** in the top corner, search for **Scriptable**, and add a widget
4. Long-press the widget, tap **Edit Widget**, and set **Script** to **DailyPema**

The widget shows a new quote each day and caches quotes locally for offline use.

## Refreshing quotes

If new quotes are added to the source site, you can re-scrape them:

```
node scripts/scrape.js
```

This updates `quotes.json`. Push the changes to GitHub and the widget will pick them up automatically.
