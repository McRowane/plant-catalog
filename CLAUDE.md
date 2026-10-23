# Plant Catalog site: instructions for Claude Code

The public, customer-facing catalog for Edward's plant business: a phone-first web app (installable to the
home screen) served by GitHub Pages at https://mcrowane.github.io/plant-catalog/. **This repo is public**,
so never commit private data: no prices paid, costs, buyer or seller names, client details, notes, or
spreadsheet/Drive IDs.

## How it works

- `index.html` is the whole app (HTML, CSS, JS in one file). `config.js` holds the feed URL and the
  Messenger contact link (https://m.me/edwdmcrowan). `sw.js` caches the app shell for offline use;
  bump its `VERSION` whenever `index.html` or `config.js` changes so phones pick up the update.
- Data comes live from the "Plant Catalog Feed" Apps Script web app (`FEED_URL` in `config.js`); the code for
  that feed and the private Plant Manager live in Edward's private `plant-business` repo.
- Inquiries and "Notify me" requests are POSTed to the same feed URL.

## Rules

- SOLD items must never show (the feed already drops them; don't add any path that could show them).
- Customers see: Available, On hold (pending payment or deposit paid), Not for sale, and Auction (individual corms).
- Corms are grouped by cultivar with a var-type filter. A lot with individual corms lists them (sub-SKU, photo,
  status); customers can add a single for-sale corm to their inquiry list.
- Photos and videos open in the catalog's own viewer. Never link customers out to Google Drive (videos play in a
  sandboxed Drive frame that can't pop out).
- Preview with sample data from the private `plant-business` repo: `node tools/catalog-preview.js 8793 ../plant-catalog`.
- Keep the shared design: Bricolage Grotesque / Atkinson Hyperlegible / JetBrains Mono, the leaf-green and
  magenta tokens, dark mode, 16px gutters, nothing wider than the phone.
- Test on a phone-width viewport before calling a change done.
- The branch `baseline-2026-10-20` marks the version before Claude Code took over; restore from it if needed.
