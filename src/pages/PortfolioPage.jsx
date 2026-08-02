import { useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../lib/useSEO";
import { LANG, SKILLS_DATA, PROJECTS } from "../data/portfolio";

const LANGS = Object.keys(LANG);

export default function PortfolioPage() {
  const [lang, setLang] = useState("ko");
  const t = LANG[lang];

  useSEO({ title: "Portfolio — Minjae Park" });

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      {/* 언어 전환 + 네비 */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-stone-950/90 backdrop-blur border-b border-stone-100 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/about" className="text-sm text-stone-400 hover:text-brown-500 dark:hover:text-brown-300 transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {t.nav.about}
          </Link>
          <div className="flex gap-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors
                  ${lang === l
                    ? "bg-brown-100 dark:bg-brown-800 text-brown-700 dark:text-brown-200"
                    : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
                  }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-20">

        {/* Hero */}
        <section className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div className="flex flex-col gap-3">
              <div>
                <h1 className="text-4xl font-semibold text-stone-900 dark:text-white">{t.hero.name}</h1>
                <p className="text-lg text-stone-400 dark:text-stone-500 mt-1">{t.hero.nameEn}</p>
              </div>
              <p className="text-base text-stone-600 dark:text-stone-300 max-w-xl leading-relaxed">{t.hero.tagline}</p>
              <p className="text-sm text-stone-400 dark:text-stone-500">{t.hero.school}</p>
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/216646609?v=4"
              alt="Minjae Park"
              className="w-24 h-24 rounded-full object-cover border-2 border-stone-100 dark:border-stone-800"
            />
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="mailto:minjae11662@gmail.com" className="flex items-center gap-1.5 text-stone-500 hover:text-brown-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              minjae11662@gmail.com
            </a>
            <a href="https://github.com/Minjae0804" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-stone-500 hover:text-brown-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              Minjae0804
            </a>
            <a href="https://minjae0804.github.io" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-stone-500 hover:text-brown-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              Sally.log
            </a>
          </div>
          <p className="text-sm text-brown-600 dark:text-brown-300 bg-brown-50 dark:bg-brown-900/30 px-4 py-2.5 rounded-lg border border-brown-100 dark:border-brown-800">
            {t.hero.goal}
          </p>
        </section>

        <Divider />

        {/* 기술 스택 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.skills}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS_DATA).map(([key, items]) => (
              <div key={key} className="flex flex-col gap-2">
                <h3 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">{t.skills[key]}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* 프로젝트 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.projects}</SectionTitle>
          <div className="flex flex-col gap-8">
            {PROJECTS.map((proj) => {
              const p = proj[lang];
              const isOngoing = proj.id === "indev";
              return (
                <div key={proj.id} className="flex flex-col sm:flex-row gap-6 group">
                  {/* 이미지 */}
                  <div className="sm:w-64 sm:shrink-0 rounded-xl overflow-hidden bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800">
                    {proj.image ? (
                      <img src={proj.image} alt={p.title} className="w-full h-40 sm:h-48 object-cover object-top" />
                    ) : (
                      <div className="w-full h-40 sm:h-48 flex items-center justify-center text-stone-300 dark:text-stone-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
                      </div>
                    )}
                  </div>
                  {/* 내용 */}
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex items-start gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-stone-900 dark:text-white leading-snug">{p.title}</h3>
                      {isOngoing && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-brown-100 dark:bg-brown-900 text-brown-600 dark:text-brown-300 shrink-0 mt-0.5">
                          {t.projects.ongoing}
                        </span>
                      )}
                    </div>
                    {p.subtitle && <p className="text-xs text-stone-400 dark:text-stone-500 -mt-2">{p.subtitle}</p>}
                    <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded bg-brown-50 dark:bg-brown-900/50 text-brown-600 dark:text-brown-400 border border-brown-100 dark:border-brown-800">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-stone-400 dark:text-stone-500">
                      <span className="font-medium">{t.projects.role}:</span> {p.role} · <span className={p.type === "team" ? "text-brown-500 dark:text-brown-300" : ""}>{t.projects[p.type]}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Divider />

        {/* 경험 및 활동 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.experience}</SectionTitle>
          <div className="flex flex-col gap-6">
            <TimelineItem
              title={t.experience.teamlead}
              desc={t.experience.teamleadDesc}
              period="2026 –"
            />
            <TimelineItem
              title={t.experience.club}
              desc={t.experience.clubDesc}
              period="2025 –"
            />
            <TimelineItem
              title={t.experience.kmove}
              desc={t.experience.kmoveDesc}
              period="2025.06 – 2026.02"
            />
          </div>
        </section>

        <Divider />

        {/* 교육 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.education}</SectionTitle>
          <TimelineItem
            title={t.education.univ}
            desc={t.education.univDesc}
            period={t.education.univPeriod}
          />
        </section>

        <Divider />

        {/* 자격 및 수상 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.awards}</SectionTitle>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">{t.awards.certsLabel}</h3>
              {t.awards.certs.map((c, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-stone-800 dark:text-stone-200">{c.name}</span>
                  <span className="text-stone-400 dark:text-stone-500 text-xs">{c.date} · {c.org}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">{t.awards.awardsLabel}</h3>
              {t.awards.awards.map((a, i) => (
                <div key={i} className="flex items-center justify-between text-sm gap-4">
                  <span className="font-medium text-stone-800 dark:text-stone-200">{a.name}</span>
                  <span className="text-stone-400 dark:text-stone-500 text-xs shrink-0">{a.date}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-stone-500 dark:text-stone-400">{t.awards.baekjoon}</div>
          </div>
        </section>

        <Divider />

        {/* 학습 현황 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.learning}</SectionTitle>
          <ul className="flex flex-col gap-2">
            {t.learning.items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                <span className="w-1.5 h-1.5 rounded-full bg-brown-300 dark:bg-brown-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        {/* 목표 및 포부 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.goal}</SectionTitle>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed whitespace-pre-line max-w-2xl">
            {t.goalText}
          </p>
        </section>

      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold text-stone-900 dark:text-white border-l-2 border-brown-400 pl-3">
      {children}
    </h2>
  );
}

function Divider() {
  return <hr className="border-stone-100 dark:border-stone-800" />;
}

function TimelineItem({ title, desc, period }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center pt-1">
        <div className="w-2 h-2 rounded-full bg-brown-300 dark:bg-brown-600 shrink-0" />
        <div className="w-px flex-1 bg-stone-100 dark:bg-stone-800 mt-1" />
      </div>
      <div className="flex flex-col gap-0.5 pb-4">
        <p className="text-sm font-medium text-stone-800 dark:text-stone-200">{title}</p>
        <p className="text-sm text-stone-500 dark:text-stone-400">{desc}</p>
        <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">{period}</p>
      </div>
    </div>
  );
}
