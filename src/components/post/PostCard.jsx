import { Link } from "react-router-dom";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import ui from "../../config/ui.json";

export default function PostCard({ post }) {
  const { slug, excerpt, content } = post;
  return (
    <article className="group p-5 rounded-xl border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-brown-300 dark:hover:border-brown-600 hover:shadow-sm transition-all duration-200">
      <PostHeader post={post} />
      <PostBody excerpt={excerpt} content={content} />
      <div className="mt-4 flex justify-end">
        <Link to={`/posts/${slug}`}
          className="text-sm text-brown-500 dark:text-brown-300 font-medium hover:underline underline-offset-2">
          {ui.post.readMore}
        </Link>
      </div>
    </article>
  );
}
