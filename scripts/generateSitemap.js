import { getAllPosts, escapeXml } from "./readPosts.js";

const STATIC_ROUTES = ["/", "/posts", "/categories", "/tags", "/about", "/portfolio"];

function getCategoryPaths(posts) {
  const paths = new Set();
  for (const post of posts) {
    if (!post.category) continue;
    const parts = post.category.split("/");
    for (let i = 1; i <= parts.length; i++) {
      paths.add(parts.slice(0, i).join("/"));
    }
  }
  return [...paths];
}

function getTagNames(posts) {
  const tags = new Set();
  for (const post of posts) {
    for (const tag of post.tags) tags.add(tag);
  }
  return [...tags];
}

export function generateSitemapXml({ siteUrl }) {
  const posts = getAllPosts();

  const urls = [
    ...STATIC_ROUTES,
    ...posts.map((p) => `/posts/${encodeURIComponent(p.slug)}`),
    ...getCategoryPaths(posts).map((path) => `/categories/${path.split("/").map(encodeURIComponent).join("/")}`),
    ...getTagNames(posts).map((tag) => `/tags/${encodeURIComponent(tag)}`),
  ];

  const entries = urls.map((url) => `
  <url>
    <loc>${escapeXml(siteUrl + url)}</loc>
  </url>`).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}
</urlset>
`;
}
