export default function PostCategory({ category = "" }) {
  if (!category) return null;

  return (
    <a
      href={`/categories/${category}`}
      className="text-xs font-medium px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
    >
      {category}
    </a>
  );
}
