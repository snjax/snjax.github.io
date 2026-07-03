import {
  defineLayoutSpec, inside, below, rightOf, gte, lte, between, eq,
  visible, countIs, almostSquared, widthIn, forAll,
  textMatches, alignedVerticallyLeft, alignedHorizontallyTop, tableLayout,
} from '@uilint/core';

// Invariants that hold on every viewport.
export const homeSpec = defineLayoutSpec((ctx) => {
  const hero = ctx.el('[data-uilint="hero"]', 'hero');
  const heroName = ctx.el('.hero-name', 'hero name');
  const portrait = ctx.el('.portrait', 'portrait');
  const contactBtns = ctx.group('[data-uilint="contacts"] .btn', 'contact buttons');
  const socialLinks = ctx.group('[data-uilint="social-links"] a', 'social links');
  const tiles = ctx.group('.tile', 'result tiles');
  const timeline = ctx.group('[data-uilint="career"] .tl', 'timeline rows');
  const papers = ctx.group('[data-uilint="research"] .paper', 'research rows');
  const machines = ctx.el('[data-uilint="machines"]', 'for-machines block');

  // The name headline is the hero's anchor and must be visible.
  ctx.must(visible(heroName, true));
  ctx.must(inside(heroName, hero, { left: gte(0), top: gte(0) }));

  // The avatar is a circle: rendered box must be square, at a sane size.
  ctx.must(almostSquared(portrait, 0.02));
  ctx.must(widthIn(portrait, between(150, 320)));

  // All three contact buttons are present and visible.
  ctx.must(countIs(contactBtns, eq(3)));
  ctx.must(forAll(contactBtns, (b) => visible(b, true)));

  // Six social links, all inside the hero.
  ctx.must(countIs(socialLinks, eq(6)));
  ctx.must(forAll(socialLinks, (a) => inside(a, hero)));

  // Results grid: exactly 8 tiles.
  ctx.must(countIs(tiles, eq(8)));

  // Career timeline: 8 rows, stacked as one left-aligned column.
  ctx.must(countIs(timeline, eq(8)));
  ctx.must(alignedVerticallyLeft(timeline, 2));

  // Research list: 9 rows, stacked as one left-aligned column.
  ctx.must(countIs(papers, eq(9)));
  ctx.must(alignedVerticallyLeft(papers, 2));

  // The for-machines block sits below the research list.
  ctx.must(below(machines, ctx.el('[data-uilint="research"]', 'research'), gte(0)));

  // Telegram is the first, primary contact button.
  ctx.must(textMatches(ctx.el('[data-uilint="contacts"] .btn-solid', 'primary contact'), /Telegram/i));
});

// Desktop-only geometry: two-column hero, four-column tiles.
export const homeDesktopSpec = defineLayoutSpec((ctx) => {
  const heroMain = ctx.el('[data-uilint="hero-main"]', 'hero text column');
  const portrait = ctx.el('.portrait', 'portrait');
  const tiles = ctx.group('.tile', 'result tiles');
  const secLabels = ctx.group('.section .sec-label', 'section labels');

  // Portrait sits in the right column, clear of the text column.
  ctx.must(rightOf(portrait, heroMain, gte(16)));

  // Results tiles form a strict 4-column grid.
  ctx.must(tableLayout(tiles, { columns: 4 }));

  // Top row of tiles is aligned by its top edge.
  ctx.must(alignedHorizontallyTop(ctx.group('.tile:nth-child(-n+4)', 'first tile row'), 2));

  // Section number labels form one consistent left rail.
  ctx.must(alignedVerticallyLeft(secLabels, 2));
});

// Mobile-only geometry: single column, portrait below the text.
export const homeMobileSpec = defineLayoutSpec((ctx) => {
  const heroMain = ctx.el('[data-uilint="hero-main"]', 'hero text column');
  const portrait = ctx.el('.portrait', 'portrait');
  const tiles = ctx.group('.tile', 'result tiles');
  const contactBtns = ctx.group('[data-uilint="contacts"] .btn', 'contact buttons');

  // The layout stacks: portrait moves under the hero text.
  ctx.must(below(portrait, heroMain, gte(0)));

  // Results tiles collapse to a 2-column grid.
  ctx.must(tableLayout(tiles, { columns: 2 }));

  // Buttons stay within the viewport width.
  ctx.must(forAll(contactBtns, (b) => widthIn(b, lte(375))));
});
