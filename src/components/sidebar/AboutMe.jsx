export default function AboutMe() {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">
        소개
      </h2>
      <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
        {/* 아바타 */}
        <div className="w-16 h-16 rounded-full overflow-hidden bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center ring-2 ring-gray-100 dark:ring-gray-800 shrink-0">
          <span className="text-xl font-semibold text-indigo-600 dark:text-indigo-400" aria-hidden="true">
            M
          </span>
        </div>

        {/* 이름 + 소개 */}
        <div>
          <p className="font-medium text-sm text-gray-900 dark:text-white">minjae0804</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
            배운 것을 기록하고 공유하는 개발자입니다.
          </p>
        </div>

        {/* GitHub 링크 */}
        <a
          href="https://github.com/minjae0804"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
          @minjae0804
        </a>
      </div>
    </div>
  );
}
