#!/usr/bin/env node

// Scrapes quotes from https://dailypema.wordpress.com/ and writes quotes.json
// Usage: node scripts/scrape.js

const https = require("https");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://dailypema.wordpress.com/page/";

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
      res.on("error", reject);
    });
  });
}

function extractQuotes(html) {
  const quotes = [];
  // Match the content inside entry-content divs
  const entryRegex =
    /<div class="entry-content">\s*<p>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = entryRegex.exec(html)) !== null) {
    let text = match[1]
      .replace(/<br\s*\/?>/g, " ")
      .replace(/<\/?[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#8217;/g, "\u2019")
      .replace(/&#8216;/g, "\u2018")
      .replace(/&#8220;/g, "\u201C")
      .replace(/&#8221;/g, "\u201D")
      .replace(/&#8211;/g, "\u2013")
      .replace(/&#8212;/g, "\u2014")
      .replace(/&rdquo;/g, "\u201D")
      .replace(/&ldquo;/g, "\u201C")
      .replace(/&rsquo;/g, "\u2019")
      .replace(/&lsquo;/g, "\u2018")
      .replace(/&mdash;/g, "\u2014")
      .replace(/&ndash;/g, "\u2013")
      .replace(/\s+/g, " ")
      .trim();

    // Remove trailing attribution like "― Pema Chödrön, Book Title"
    text = text.replace(/\s*[―–—-]\s*Pema\s+Ch.dr.n.*$/i, "").trim();

    // Remove surrounding quotes if present
    text = text.replace(/^[""\u201C]/, "").replace(/[""\u201D]$/, "").trim();

    if (text.length > 10) {
      quotes.push(text);
    }
  }
  return quotes;
}

async function main() {
  const allQuotes = [];
  let page = 1;

  while (true) {
    const url = page === 1 ? "https://dailypema.wordpress.com/" : `${BASE_URL}${page}/`;
    process.stdout.write(`Fetching page ${page}... `);
    try {
      const html = await fetch(url);
      const quotes = extractQuotes(html);
      if (quotes.length === 0) break;
      console.log(`found ${quotes.length} quotes`);
      allQuotes.push(...quotes);
      page++;
    } catch (err) {
      if (err.message.includes("404")) break;
      throw err;
    }
  }

  const outPath = path.join(__dirname, "..", "quotes.json");
  fs.writeFileSync(outPath, JSON.stringify(allQuotes, null, 2) + "\n");
  console.log(`\nWrote ${allQuotes.length} quotes to quotes.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
