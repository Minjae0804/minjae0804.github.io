import { marked } from "marked";
import hljs from "highlight.js";

marked.use({
  breaks: true,
  renderer: {
    code({ text, lang }) {
      const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
      const highlighted = hljs.highlight(text, { language }).value;
      return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
    },
    paragraph({ text }) {
      return `<p>${text.replace(/\n/g, "<br>")}</p>\n`;
    }
  }
});

const modules = import.meta.glob("../posts/**/*.md", { query: "?raw", import: "default", eager: true });
const categoryConfigs = import.meta.glob("../posts/**/_config.json", { eager: true });

function getCategoryConfig(categoryPath, parentConfig = {}) {
  const key = `../posts/${categoryPath}/_config.json`;
  const ownConfig = categoryConfigs[key]?.default ?? categoryConfigs[key];
  if (ownConfig) return { ...parentConfig, ...ownConfig };
  return parentConfig;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data = {};
  const lines = match[1].split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) { i++; continue; }

    const key = line.slice(0, colonIdx).trim();
    const rest = line.slice(colonIdx + 1).trim();

    if (rest === "" && lines[i + 1]?.trimStart().startsWith("- ")) {
      const items = [];
      i++;
      while (i < lines.length && lines[i].trimStart().startsWith("- ")) {
        items.push(lines[i].trimStart().slice(2).trim());
        i++;
      }
      data[key] = items;
      continue;
    }

    if (rest.startsWith("[")) {
      data[key] = rest
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^"|"$/g, ""));
      i++; continue;
    }

    const quotedMatch = rest.match(/^"(.*)"$/);
    data[key] = quotedMatch ? quotedMatch[1] : rest;
    i++;
  }

  return { data, content: match[2].trim() };
}

function parsePost(raw, slug, category) {
  const { data, content } = parseFrontmatter(raw);
  let html = marked.parse(content);

  html = html.replace(/(<code[^>]*>[\s\S]*?<\/code>)|\*\*([^*\n]+)\*\*|`([^`\n]+)`/g, (match, codeTag, bold, inline) => {
    if (codeTag) return codeTag;
    if (bold) return `<strong>${bold}</strong>`;
    return `<code>${inline}</code>`;
  });

  return {
    slug,
    title: data.title ?? "제목 없음",
    date: data.date ? String(data.date) : "",
    category,
    tags: Array.isArray(data.tags) ? data.tags : [],
    uploader: data.uploader ?? "",
    excerpt: data.excerpt ?? content.slice(0, 100).replace(/[#*`\n]/g, "").trim(),
    content,
    html,
    draft: data.draft === "true" || data.draft === true,
  };
}

export const allPosts = Object.entries(modules)
  .map(([path, raw]) => {
    const relativePath = path.replace("../posts/", "");
    const slug = relativePath.replace(/^.*\//, "").replace(".md", "");
    const category = relativePath.includes("/")
      ? relativePath.replace(/\/[^/]+\.md$/, "")
      : "";
    return parsePost(raw, slug, category);
  })
  .filter((post) => !post.draft)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getPostBySlug(slug) {
  return allPosts.find((p) => p.slug === slug) ?? null;
}

export function getCategoryInfo(categoryPath, parentConfig = {}) {
  const config = getCategoryConfig(categoryPath, parentConfig);
  const sort = config.postSort ?? "date-desc";

  let directPosts = allPosts.filter((p) => p.category === categoryPath);

  if (sort === "date-asc") {
    directPosts = [...directPosts].sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sort === "title-asc") {
    directPosts = [...directPosts].sort((a, b) => a.title.localeCompare(b.title, "ko", { numeric: true }));
  } else if (sort === "title-desc") {
    directPosts = [...directPosts].sort((a, b) => b.title.localeCompare(a.title, "ko", { numeric: true }));
  }

  const prefix = categoryPath + "/";
  const childCategories = [...new Set(
    allPosts
      .filter((p) => p.category.startsWith(prefix))
      .map((p) => {
        const rest = p.category.slice(prefix.length);
        return rest.split("/")[0];
      })
  )].sort((a, b) => a.localeCompare(b, "ko", { numeric: true }));

  return { directPosts, childCategories, config };
}

export function getCategories() {
  const map = {};
  for (const post of allPosts) {
    if (!post.category) continue;
    const root = post.category.split("/")[0];
    map[root] = (map[root] ?? 0) + 1;
  }
  return Object.entries(map)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name, "ko", { numeric: true }));
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

export function getMaxCategoryDepth() {
  return Math.max(0, ...allPosts.map((p) => p.category ? p.category.split("/").length : 0));
}

export function getMaxDepthByRoot() {
  const map = {};
  for (const post of allPosts) {
    if (!post.category) continue;
    const parts = post.category.split("/");
    const root = parts[0];
    map[root] = Math.max(map[root] ?? 0, parts.length);
  }
  return map;
}

export function getTotalPostCount(categoryPath) {
  const prefix = categoryPath + "/";
  return allPosts.filter((p) => 
    p.category === categoryPath || p.category.startsWith(prefix)
  ).length;
}

export function getParentConfig(categoryPath) {
  const parts = categoryPath.split("/");
  if (parts.length <= 1) return {};
  const parentPath = parts.slice(0, -1).join("/");
  return getCategoryConfig(parentPath, getParentConfig(parentPath));
}

export function getConfigOwner(categoryPath) {
  const parts = categoryPath.split("/");
  // 상위부터 내려오면서 _config.json 가진 카테고리 찾기
  for (let i = parts.length - 1; i >= 0; i--) {
    const path = parts.slice(0, i).join("/");
    if (!path) break;
    const key = `../posts/${path}/_config.json`;
    if (categoryConfigs[key]) return path;
  }
  return null;
}