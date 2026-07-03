import { defineScenario } from '@uilint/cli';
import { chromeSpec } from '../specs/chrome';
import { longreadSpec } from '../specs/longread';

export default defineScenario('ai', async (runtime) => {
  await runtime.goto('/ai/');
  await runtime.page.waitForSelector('[data-uilint="lr-body"]');
  await runtime.snapshot('chrome', chromeSpec);
  await runtime.snapshot('longread', longreadSpec);
});
