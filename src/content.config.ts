import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Published posts only. `publish.yml` (in the private pipeline repo) moves a
// reviewed draft here. The summarizer's pipeline frontmatter (status, models,
// item_count, generated_at, …) is ignored — zod drops unknown keys — so only the
// fields below are required of an incoming post.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().optional(),          // falls back to "<topic> — <date>"
    date: z.coerce.date(),
    topic: z.string().default('ai-agents'),
    draft_id: z.string().optional(),
  }),
});

export const collections = { posts };
