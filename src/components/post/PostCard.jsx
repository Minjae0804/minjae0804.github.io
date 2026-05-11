import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

export default function PostCard({ post }) {
  const { url, excerpt, content } = post;

  return (
    <article className="group p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all duration-200">
      <PostHeader post={post} />
      <PostBody excerpt={excerpt} content={content} />

      <div className="mt-4 flex justify-end">
        <a
          href={url}
          className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline underline-offset-2"
        >
          더 읽기 →
        </a>
      </div>
    </article>
  );
}
