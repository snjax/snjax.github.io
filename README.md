# igorgulamov.com

Personal site of Igor Gulamov (snjax) — built with [Zola](https://www.getzola.org/), deployed to GitHub Pages at [igorgulamov.com](https://igorgulamov.com).

Optimized for both human readers and AI research agents (GEO/SEO): JSON-LD on every page, `robots.txt`, `llms.txt`, `sitemap.xml`, canonical URLs, Open Graph.

## Structure

- `content/` — markdown sources: `bio.md` (full longread), topic pages `ai.md` / `zk.md` / `audits.md` / `physics.md`, and `plasma.md` (the history-split deep dive)
- `templates/` — Zola templates (Swiss-grid design, no external assets)
- `static/` — `robots.txt`, `llms.txt`, `CNAME`, `.nojekyll`, images; `llms.txt` is generated (digest header in `scripts/llms-header.md` + full page prose)
- `scripts/build-llms-full.sh` — regenerates `static/llms.txt` from the digest header + markdown sources
- `uilint/` — local layout tests ([uilint](https://github.com/snjax/uilint)); not run in CI
- `.sya/` — task tracker (sya)

## Develop

```bash
zola serve                      # local preview at http://127.0.0.1:1111
bash scripts/build-llms-full.sh # refresh llms.txt after editing content
```

## Test layout (local only)

```bash
npm install
npx playwright install chromium   # first time only
npx uilint layout
```

## Deploy

Push to `master` — `.github/workflows/deploy.yml` builds with Zola and publishes to GitHub Pages (uilint is intentionally not part of CI).
