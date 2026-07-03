import { defineScenario } from '@uilint/cli';
import { chromeSpec } from '../specs/chrome';
import { longreadSpec, bioSpec } from '../specs/longread';

export default defineScenario('bio', async (runtime) => {
  await runtime.goto('/bio/');
  await runtime.page.waitForSelector('[data-uilint="lr-body"]');
  await runtime.snapshot('chrome', chromeSpec);
  await runtime.snapshot('longread', longreadSpec);
  await runtime.snapshot('bio', bioSpec);
});
