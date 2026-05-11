import { Link } from "react-router-dom";

export default function PostTitle({ title = "", slug = "" }) {
  return (
    <h2 className="text-base font-semibold text-stone-900 dark:text-white leading-snug group-hover:text-brown-500 dark:group-hover:text-brown-300 transition-colors">
      <Link to={`/posts/${slug}`}>{title}</Link>
    </h2>
  );
}
