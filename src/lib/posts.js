import { marked } from "marked";

const modules = import.meta.glob("../posts/**/*.md", { query: "?raw", import: "default", eager: true });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data = {};
  match[1].split("\n").forEach((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim().replace(/^"|"$/g, "");

    // tags 배열 파싱
    if (value.startsWith("[")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^"|"$/g, ""));
    } else if (key === "date") {
      // 날짜는 따옴표 안의 전체 값을 그대로 사용
      const dateMatch = line.match(/date:\s*"([^"]+)"/);
      if (dateMatch) data[key] = dateMatch[1];
      else data[key] = value;
    } else {
      data[key] = value;
    }
  });

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
    const slug = path.replace("../posts/", "").replace(".md", "");
    return parsePost(raw, slug);
  })
  .filter((post) => !post.draft)  // 이 줄 추가
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