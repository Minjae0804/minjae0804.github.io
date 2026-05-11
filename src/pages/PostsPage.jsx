import { allPosts } from "../lib/posts";
import useSEO from "../lib/useSEO";
import PageLayout from "./PageLayout";
import PostCard from "../components/post/PostCard";
import ui from "../config/ui.json";

export default function PostsPage() {
  useSEO({ title: "포스트" });

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-white">포스트</h1>
          <span className="text-sm text-stone-400 dark:text-stone-500">{allPosts.length}{ui.category.postCount}</span>
        </div>
        {allPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-stone-400 dark:text-stone-500 gap-2">
            <p className="text-sm">{ui.post.empty}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {allPosts.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
