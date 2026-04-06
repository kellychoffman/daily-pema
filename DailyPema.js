// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: sun;

const QUOTES_URL =
  "https://raw.githubusercontent.com/kellychoffman/daily-pema/main/quotes.json";

async function loadQuotes() {
  const fm = FileManager.local();
  const cache = fm.joinPath(fm.documentsDirectory(), "daily-pema-cache.json");

  try {
    const req = new Request(QUOTES_URL);
    const quotes = await req.loadJSON();
    fm.writeString(cache, JSON.stringify(quotes));
    return quotes;
  } catch {
    if (fm.fileExists(cache)) {
      return JSON.parse(fm.readString(cache));
    }
    return ["Be where you are, not where you think you should be."];
  }
}

function quoteOfTheDay(quotes) {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return quotes[dayOfYear % quotes.length];
}

function createWidget(quote, size) {
  const w = new ListWidget();
  w.backgroundColor = new Color("#1a1a1a");
  w.setPadding(16, 16, 16, 16);

  const maxLen = size === "small" ? 120 : size === "medium" ? 200 : 500;
  let displayQuote = quote;
  if (quote.length > maxLen) {
    displayQuote = quote.substring(0, maxLen - 1).trimEnd() + "\u2026";
  }

  const quoteText = w.addText(`\u201C${displayQuote}\u201D`);
  quoteText.textColor = new Color("#f5f5f5");
  quoteText.font = Font.lightSystemFont(size === "small" ? 12 : 14);
  quoteText.minimumScaleFactor = 0.7;

  w.addSpacer();

  const author = w.addText("\u2014 Pema Ch\u00F6dr\u00F6n");
  author.textColor = new Color("#bbbbbb");
  author.font = Font.italicSystemFont(size === "small" ? 10 : 12);
  author.rightAlignText();

  return w;
}

const quotes = await loadQuotes();
const quote = quoteOfTheDay(quotes);
const size = config.widgetFamily || "medium";
const widget = createWidget(quote, size);

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentMedium();
}

Script.complete();
