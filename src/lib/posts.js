import { marked } from "marked";

const modules = import.meta.glob("../posts/**/*.md", { query: "?raw", import: "default", eager: true });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data = {};
  const lines = match[1].split(/\r?\n/);

  for (const line of lines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    const rest = line.slice(colonIdx + 1).trim();

    // 따옴표로 감싸진 값 전체 추출
    const quotedMatch = rest.match(/^"(.*)"$/);
    const value = quotedMatch ? quotedMatch[1] : rest;

    if (value.startsWith("[")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^"|"$/g, ""));
    } else {
      data[key] = value;
    }
  }

  return { data, content: match[2].trim() };
}

function parsePost(raw, slug) {
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title: data.title ?? "제목 없음",
    date: data.date ? String(data.date) : "",
    category: data.category ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    uploader: data.uploader ?? "",
    excerpt: data.excerpt ?? content.slice(0, 100).replace(/[#*`\n]/g, "").trim(),
    content,
    html: marked.parse(content),
    draft: data.draft === "true" || data.draft === true,
  };
}

export const allPosts = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace("../posts/", "").replace(/^.*\//, "").replace(".md", "");
    return parsePost(raw, slug);
  })
  .filter((post) => !post.draft)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getPostBySlug(slug) {
  return allPosts.find((p) => p.slug === slug) ?? null;
}

export function getCategories() {
  const map = {};
  for (const post of allPosts) {
    if (post.category) map[post.category] = (map[post.category] ?? 0) + 1;
  }
  return Object.entries(map).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
}

export function getTags() {
  const map = {};
  for (const post of allPosts) {
    for (const tag of post.tags) map[tag] = (map[tag] ?? 0) + 1;
  }
  return Object.entries(map).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
}

export function getLatestPosts(n = 5) {
  return allPosts.slice(0, n);
}

export function getPostsByPage(page = 1, perPage = 5) {
  const start = (page - 1) * perPage;
  return {
    posts: allPosts.slice(start, start + perPage),
    totalPages: Math.ceil(allPosts.length / perPage),
    currentPage: page,
  };
}