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
        {headings.map((h, i) => {
          const isActive = activeIds.includes(h.id);
          const parentActive = h.level === 3 && headings.some((ph, pi) =>
            ph.level === 2 && activeIds.includes(ph.id) &&
            pi < i && !headings.slice(pi + 1, i).some(between => between.level === 2)
          );

          return (
            <a
              key={h.id}
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              style={{ paddingLeft: h.level === 3 ? "1rem" : "0" }}
              className={`text-sm py-0.5 pl-3 transition-colors duration-150 leading-snug
                ${isActive
                  ? "border-brown-400 text-brown-500 dark:text-brown-300 font-semibold"
                  : parentActive
                  ? "border-transparent text-brown-400 dark:text-brown-400"
                  : "border-transparent text-stone-300 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                }`}
            >
              {h.text}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
