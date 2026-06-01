import { defineConfig } from 'astro/config';

// GitHub Pages, project site → https://<user>.github.io/trend-insight-blog/
// - Update `site` to your GitHub username.
// - For a user/org page (<user>.github.io repo) or a custom domain, set base: '/'.
export default defineConfig({
  site: 'https://mixedapple-crypto.github.io',
  base: '/trend-insight-blog',
});
