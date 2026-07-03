import { defineScenario } from '@uilint/cli';
import { chromeSpec } from '../specs/chrome';
import { homeSpec, homeDesktopSpec, homeMobileSpec } from '../specs/home';

export default defineScenario('home', async (runtime) => {
  await runtime.goto('/');
  await runtime.page.waitForSelector('[data-uilint="hero"]');
  await runtime.snapshot('chrome', chromeSpec);
  await runtime.snapshot('home', homeSpec);
  if (runtime.viewportClass === 'desktop') {
    await runtime.snapshot('home-desktop', homeDesktopSpec);
  }
  if (runtime.viewportClass === 'mobile') {
    await runtime.snapshot('home-mobile', homeMobileSpec);
  }
});
