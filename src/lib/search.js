import { allPosts } from "./posts";

export function searchPosts(query) {
  if (!query || !query.trim()) return [];
  const q = query.trim().toLowerCase();

  return allPosts.filter((post) => {
    const inTitle = post.title.toLowerCase().includes(q);
    const inCategory = post.category.toLowerCase().includes(q);
    const inTags = post.tags.some((tag) => tag.toLowerCase().includes(q));
    return inTitle || inCategory || inTags;
  });
}
