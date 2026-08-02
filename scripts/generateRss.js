import { getAllPosts, escapeXml } from "./readPosts.js";

export function generateRssXml({ siteUrl, title, description }) {
  const posts = getAllPosts().slice(0, 20);

  const items = posts.map((p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${siteUrl}/posts/${encodeURIComponent(p.slug)}</link>
      <guid>${siteUrl}/posts/${encodeURIComponent(p.slug)}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(description)}</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>
`;
}
