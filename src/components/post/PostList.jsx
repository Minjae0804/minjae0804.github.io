import { getPostsByPage } from "../../lib/posts";
import PostCard from "./PostCard";
import ui from "../../config/ui.json";

export default function PostList({ page = 1, perPage = 5 }) {
  const { posts } = getPostsByPage(page, perPage);
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-stone-400 dark:text-stone-500 gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
        </svg>
        <p className="text-sm">{ui.post.empty}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => <PostCard key={post.slug} post={post} />)}
    </div>
  );
}
