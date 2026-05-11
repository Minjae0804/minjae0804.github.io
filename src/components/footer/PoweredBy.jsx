import blog from "../../config/blog.json";
import ui from "../../config/ui.json";

export default function PoweredBy() {
  return (
    <a href={blog.footer.poweredByUrl} target="_blank" rel="noopener noreferrer"
      className="text-xs text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
      {ui.footer.poweredByPrefix} {blog.footer.poweredBy}
    </a>
  );
}
