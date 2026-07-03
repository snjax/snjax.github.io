import { defineUilintConfig } from '@uilint/cli';

export default defineUilintConfig({
  layout: {
    build: 'bash scripts/build-llms-full.sh && zola build',
    distDir: './public',
    scenarios: {
      home: { module: './uilint/scenarios/home.ts', viewports: ['mobile', 'tablet', 'desktop'] },
      bio: { module: './uilint/scenarios/bio.ts', viewports: ['mobile', 'desktop'] },
      plasma: { module: './uilint/scenarios/plasma.ts', viewports: ['mobile', 'desktop'] },
      ai: { module: './uilint/scenarios/ai.ts', viewports: ['mobile', 'desktop'] },
      zk: { module: './uilint/scenarios/zk.ts', viewports: ['mobile', 'desktop'] },
      audits: { module: './uilint/scenarios/audits.ts', viewports: ['mobile', 'desktop'] },
      physics: { module: './uilint/scenarios/physics.ts', viewports: ['mobile', 'desktop'] },
    },
  },
});
