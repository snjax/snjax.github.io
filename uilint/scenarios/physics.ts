import { defineScenario } from '@uilint/cli';
import { chromeSpec } from '../specs/chrome';
import { longreadSpec } from '../specs/longread';

export default defineScenario('physics', async (runtime) => {
  await runtime.goto('/physics/');
  await runtime.page.waitForSelector('[data-uilint="lr-body"]');
  await runtime.snapshot('chrome', chromeSpec);
  await runtime.snapshot('longread', longreadSpec);
});
