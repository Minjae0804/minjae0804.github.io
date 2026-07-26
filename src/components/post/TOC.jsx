export default function TOC({ headings, activeIds = [] }) {
  if (headings.length === 0) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav aria-label="목차">
      <div className="flex flex-col gap-0.5">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            onClick={(e) => handleClick(e, h.id)}
            style={{ paddingLeft: h.level === 3 ? "1rem" : "0" }}
            className={`text-sm py-0.5 pl-3 border-l-2 transition-colors duration-150 leading-snug
            ${activeIds.includes(h.id)
              ? "border-brown-400 text-brown-600 dark:text-brown-300 font-semibold"
              : "border-transparent text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
            }`}
          >
            {h.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
