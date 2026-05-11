export default function PostTitle({ title = "", url = "#" }) {
  return (
    <h2 className="text-base font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
      <a href={url}>{title}</a>
    </h2>
  );
}
