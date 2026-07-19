import { Link } from "react-router-dom";
import blog from "../config/blog.json";
import aboutConfig from "../config/about.json";
import useSEO from "../lib/useSEO";
import PageLayout from "./PageLayout";

export default function AboutPage() {
  const { name, github, email, initial } = blog.author;
  // const greeting = aboutConfig.greeting.replace("{name}", name);

  useSEO({ title: "소개", description: blog.description });

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto flex flex-col gap-10">
        <div className="flex items-center gap-6"><div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-stone-100 dark:ring-stone-800 shrink-0">
          <img src={blog.author.avatar} alt={blog.author.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-white">{name}</h1>
          <p className="text-stone-500 dark:text-stone-400 mt-1">{blog.description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-stone-600 dark:text-stone-400 leading-relaxed text-sm">
        <p><strong className="text-stone-900 dark:text-white font-medium">{aboutConfig.bio1}</strong></p>
        {/* {aboutConfig.bio2.map((line, i) => <p key={i}>{line}</p>)} */}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">기술 스택</h2>
        <div className="flex flex-col gap-3">
          {aboutConfig.skills.map(({ category, items }) => (
            <div key={category} className="flex items-start gap-4">
              <span className="text-xs font-medium text-brown-500 dark:text-brown-300 w-20 shrink-0 pt-0.5">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">{aboutConfig.links.sectionLabel}</h2>
          <div className="flex flex-col gap-2">
            <a href={github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-brown-500 dark:hover:text-brown-300 transition-colors w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
              GitHub
            </a>
            <a href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-brown-500 dark:hover:text-brown-300 transition-colors w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              {email}
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 dark:border-stone-800">
          <Link to="/" className="text-sm text-brown-500 dark:text-brown-300 hover:underline underline-offset-2">
            {aboutConfig.links.backToBlog}
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
