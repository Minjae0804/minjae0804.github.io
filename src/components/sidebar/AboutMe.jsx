import blog from "../../config/blog.json";
import ui from "../../config/ui.json";

export default function AboutMe() {
  const { name, initial, github, email, description } = { ...blog.author, description: blog.description };
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-3">
        {ui.sidebar.about}
      </h2>
      <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-stone-100 dark:border-stone-800">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-brown-50 dark:bg-brown-800 flex items-center justify-center ring-2 ring-stone-100 dark:ring-stone-800 shrink-0">
          <span className="text-xl font-semibold text-brown-500 dark:text-brown-300" aria-hidden="true">{initial}</span>
        </div>
        <div>
          <p className="font-medium text-md text-stone-900 dark:text-white">{name}</p>
          {/* <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">{description}</p> */}
        </div>
        <div className="flex items-center gap-2">
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="w-8 h-8 flex items-center justify-center rounded-md text-stone-400 dark:text-stone-500 hover:text-brown-500 dark:hover:text-brown-300 hover:bg-brown-50 dark:hover:bg-stone-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
          <a href={`mailto:${email}`} aria-label="이메일"
            className="w-8 h-8 flex items-center justify-center rounded-md text-stone-400 dark:text-stone-500 hover:text-brown-500 dark:hover:text-brown-300 hover:bg-brown-50 dark:hover:bg-stone-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
