import { useParams, Link } from "react-router-dom";
import { allPosts } from "../lib/posts";
import useSEO from "../lib/useSEO";
import PageLayout from "./PageLayout";
import PostCard from "../components/post/PostCard";
import ui from "../config/ui.json";

export default function CategoryPage() {
  const { name } = useParams();
  const posts = allPosts.filter((p) => p.category === name);

  useSEO({ title: name });

  return (
    <PageLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-sm text-stone-400 hover:text-brown-500 transition-colors">{ui.breadcrumb.home}</Link>
          <span className="text-stone-300 dark:text-stone-600 text-sm">/</span>
          <span className="text-sm text-stone-500 dark:text-stone-400">{ui.breadcrumb.category}</span>
          <span className="text-stone-300 dark:text-stone-600 text-sm">/</span>
          <span className="text-sm font-medium text-brown-500 dark:text-brown-300">{name}</span>
        </div>
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-white">{name}</h1>
          <span className="text-sm text-stone-400 dark:text-stone-500">{posts.length}{ui.category.postCount}</span>
        </div>
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-stone-400 gap-2">
            <p className="text-sm">{ui.category.empty}</p>
            <Link to="/" className="text-sm text-brown-500 hover:underline underline-offset-2">{ui.notFound.backToHome}</Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
