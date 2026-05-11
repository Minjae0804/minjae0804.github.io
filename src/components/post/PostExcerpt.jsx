export default function PostExcerpt({ excerpt = "" }) {
  return (
    <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed">
      {excerpt}
    </p>
  );
}
