import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Note: We are not setting outDir yet to avoid impacting your current GitHub Pages setup.
// Once you confirm deployment preferences, we can set outDir to 'docs' (or another path) if desired.
export default defineConfig({
  integrations: [react()],
  build: {
    // outDir: 'docs',
  },
  site: 'https://tsmalls33.github.io',
});
