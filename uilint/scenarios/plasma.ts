import { defineScenario } from '@uilint/cli';
import { chromeSpec } from '../specs/chrome';
import { longreadSpec, plasmaSpec } from '../specs/longread';

export default defineScenario('plasma', async (runtime) => {
  await runtime.goto('/plasma/');
  await runtime.page.waitForSelector('[data-uilint="lr-body"]');
  await runtime.snapshot('chrome', chromeSpec);
  await runtime.snapshot('longread', longreadSpec);
  await runtime.snapshot('plasma', plasmaSpec);
});
