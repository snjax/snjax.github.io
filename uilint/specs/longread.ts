import {
  defineLayoutSpec, inside, below, gte, lte, between, visible,
  widthIn, forAll, countIs, textMatches,
} from '@uilint/core';

// Layout invariants for the /bio/ and /plasma/ longread pages.
export const longreadSpec = defineLayoutSpec((ctx) => {
  const head = ctx.el('[data-uilint="lr-head"]', 'article header');
  const title = ctx.el('.lr-title', 'article title');
  const kicker = ctx.el('.lr-kicker', 'kicker');
  const body = ctx.el('[data-uilint="lr-body"]', 'article body');
  const headings = ctx.group('.lr-body h2', 'section headings');
  const tables = ctx.group('.lr-body table', 'tables');
  const quotes = ctx.group('.lr-body blockquote', 'blockquotes');

  // Header block: kicker above title, both visible.
  ctx.must(visible(title, true));
  ctx.must(below(title, kicker, gte(0)));

  // Body starts below the header.
  ctx.must(below(body, head, gte(0)));

  // Reading measure is capped for legibility.
  ctx.must(widthIn(body, lte(760)));

  // A longread has substance: at least 4 section headings.
  ctx.must(countIs(headings, gte(4)));

  // Every heading stays inside the body column.
  ctx.must(forAll(headings, (h) => inside(h, body)));

  // Tables scroll inside their own box instead of widening the column.
  ctx.must(forAll(tables, (t) => widthIn(t, lte(760))));

  // Quotes stay inside the body column.
  ctx.must(forAll(quotes, (q) => inside(q, body)));
});

// Bio-specific content anchors.
export const bioSpec = defineLayoutSpec((ctx) => {
  const firstHeading = ctx.el('.lr-body h2:first-of-type', 'first section');
  const lastHeading = ctx.el('.lr-body h2:last-of-type', 'last section');

  // Contacts open the biography; machine notes close it.
  ctx.must(textMatches(firstHeading, /Contact/i));
  ctx.must(textMatches(lastHeading, /AI research agents/i));
});

// Plasma-page content anchors.
export const plasmaSpec = defineLayoutSpec((ctx) => {
  const quotes = ctx.group('.lr-body blockquote', 'blockquotes');
  const sources = ctx.el('.lr-body h2:last-of-type', 'sources heading');

  // The verbatim history-split quote is present.
  ctx.must(countIs(quotes, gte(1)));

  // The page closes with the sources section.
  ctx.must(textMatches(sources, /sources/i));
});
