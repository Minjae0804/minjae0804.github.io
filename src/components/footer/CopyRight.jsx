import blog from "../../config/blog.json";
import ui from "../../config/ui.json";

export default function CopyRight() {
  const year = new Date().getFullYear();
  return (
    <p className="text-sm text-stone-400 dark:text-stone-500">
      © {year} {blog.author.name}. {ui.footer.allRightsReserved}
    </p>
  );
}
