export default function PostExcerpt({ excerpt = "" }) {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
      {excerpt}
    </p>
  );
}
