# trend-insight-blog

Public static blog (Astro → GitHub Pages) for the [trend-insight](../trend-insight) pipeline.
**Published posts only** — raw drafts and pipeline secrets stay in the private repo.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # serve the build
```

Posts live in `src/content/posts/*.md`; the schema is `src/content.config.ts`
(`title?`, `date`, `topic`, `draft_id?` — extra frontmatter is ignored).

## Deploy

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to `main`.
One-time setup:

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Set `site` (your GitHub username) and `base` in `astro.config.mjs` — `base: '/trend-insight-blog'`
   for a project page, or `'/'` for a user page / custom domain.

## How posts get here

The private pipeline reviews a draft via Telegram, then `publish.yml` pushes the
approved post into `src/content/posts/` here — which triggers the deploy above.
Preview + the `[Publish]` button are served by the Cloudflare Worker (it reads the
draft from the private repo), not by this blog.
