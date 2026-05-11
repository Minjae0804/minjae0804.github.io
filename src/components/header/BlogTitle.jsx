import blog from "../../config/blog.json";

export default function BlogTitle() {
  return (
    <a href="/" className="flex items-baseline gap-2 shrink-0">
      <span className="text-xl font-semibold tracking-tight text-stone-900 dark:text-white transition-colors">
        {blog.title}
      </span>
      <span className="text-sm text-stone-400 dark:text-stone-500 hidden sm:block">
        {blog.subtitle}
      </span>
    </a>
  );
}
