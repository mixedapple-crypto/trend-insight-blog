// Normalized base-path helpers. import.meta.env.BASE_URL may or may not carry a
// trailing slash depending on the `base` config, so never concatenate it directly.
const RAW = import.meta.env.BASE_URL;

/** Base path, guaranteed to end with a single "/". */
export const base = RAW.endsWith('/') ? RAW : `${RAW}/`;

/** Join a site-relative path onto the base with exactly one slash. */
export const href = (path: string): string => base + path.replace(/^\/+/, '');
