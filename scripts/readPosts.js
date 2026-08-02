import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.resolve(__dirname, "../src/posts");

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
      data[key] = rest.slice(1, -1).split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
      i++; continue;
    }

    const quotedMatch = rest.match(/^"(.*)"$/);
    data[key] = quotedMatch ? quotedMatch[1] : rest;
    i++;
  }

  return { data, content: match[2].trim() };
}

function walkMarkdownFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walkMarkdownFiles(full));
    else if (entry.name.endsWith(".md")) results.push(full);
  }
  return results;
}

export function escapeXml(str) {
  return String(str).replace(/[<>&'"]/g, (c) => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;",
  }[c]));
}

export function getAllPosts() {
  return walkMarkdownFiles(POSTS_DIR)
    .map((file) => {
      const raw = fs.readFileSync(file, "utf-8");
      const { data, content } = parseFrontmatter(raw);
      const relativePath = path.relative(POSTS_DIR, file).split(path.sep).join("/");
      const category = relativePath.includes("/")
        ? relativePath.replace(/\/[^/]+\.md$/, "")
        : "";

      return {
        slug: path.basename(file, ".md"),
        category,
        title: data.title ?? "제목 없음",
        date: data.date ? String(data.date) : "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt ?? content.slice(0, 200).replace(/[#*`\n]/g, "").trim(),
        draft: data.draft === "true" || data.draft === true,
      };
    })
    .filter((post) => !post.draft && post.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
