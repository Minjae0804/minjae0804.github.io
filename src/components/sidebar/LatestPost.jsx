import { Link } from "react-router-dom";
import { getLatestPosts } from "../../lib/posts";
import blog from "../../config/blog.json";
import ui from "../../config/ui.json";

export default function LatestPost() {
  const posts = getLatestPosts(blog.sidebar.latestPostCount);
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3">
        {ui.sidebar.latestPost}
      </h2>
      <ul className="flex flex-col gap-3">
        {posts.map(({ slug, title, date }) => {
          const formatted = new Date(date).toLocaleDateString("ko-KR", { year: "numeric", month: "short", day: "numeric" });
          return (
            <li key={slug}>
              <Link to={`/posts/${slug}`} className="flex flex-col gap-0.5 group">
                <span className="text-sm text-stone-700 dark:text-stone-300 group-hover:text-brown-500 dark:group-hover:text-brown-300 transition-colors line-clamp-1 leading-snug">{title}</span>
                <time dateTime={date} className="text-xs text-stone-400 dark:text-stone-500">{formatted}</time>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
