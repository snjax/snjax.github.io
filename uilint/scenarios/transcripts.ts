import { defineScenario } from '@uilint/cli';
import { chromeSpec } from '../specs/chrome';

export default defineScenario('transcripts', async (runtime) => {
  await runtime.goto('/transcripts/');
  await runtime.page.waitForSelector('[data-uilint="tx-list"]');
  await runtime.snapshot('chrome', chromeSpec);
  await runtime.goto('/transcripts/ethprague-2026/');
  await runtime.page.waitForSelector('[data-uilint="lr-body"]');
  await runtime.snapshot('chrome', chromeSpec);
});
