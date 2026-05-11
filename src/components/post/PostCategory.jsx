import { Link } from "react-router-dom";

export default function PostCategory({ category = "" }) {
  if (!category) return null;
  return (
    <Link
      to={`/categories/${category}`}
      className="text-xs font-medium px-2 py-0.5 rounded bg-brown-50 dark:bg-brown-800 text-brown-600 dark:text-brown-300 hover:bg-brown-100 dark:hover:bg-brown-700 transition-colors"
    >
      {category}
    </Link>
  );
}
