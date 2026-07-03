import {
  defineLayoutSpec, below, gte, lte, eq, visible, widthMatches,
  inside, forAll, countIs,
} from '@uilint/core';

// Shared page chrome: header bar, nav, footer, no horizontal overflow.
export const chromeSpec = defineLayoutSpec((ctx) => {
  const topbar = ctx.el('[data-uilint="topbar"]', 'top bar');
  const topnav = ctx.el('[data-uilint="topnav"]', 'top nav');
  const navLinks = ctx.group('[data-uilint="topnav"] a', 'nav links');
  const footer = ctx.el('[data-uilint="footer"]', 'footer');

  // Top bar is visible and pinned to the very top of the document.
  ctx.must(visible(topbar, true));
  ctx.must(below(topbar, ctx.canvas, lte(0), 'topbar starts at canvas top'));

  // Nav sits directly under the top bar.
  ctx.must(below(topnav, topbar, gte(0)));

  // Nav has exactly 8 links, each contained in the nav (wrapping allowed).
  ctx.must(countIs(navLinks, eq(8)));
  ctx.must(forAll(navLinks, (a) => inside(a, topnav)));

  // Footer exists below the nav (content between them varies per page).
  ctx.must(visible(footer, true));
  ctx.must(below(footer, topnav, gte(0)));

  // The page never scrolls horizontally.
  ctx.must(widthMatches(ctx.canvas, ctx.view, { tolerance: 0.01 }, 'no horizontal overflow'));
});
