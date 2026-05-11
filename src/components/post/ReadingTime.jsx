export default function ReadingTime({ content = "" }) {
  const WORDS_PER_MINUTE = 200;
  const wordCount = content.trim().length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

  return (
    <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
      {minutes}분 읽기
    </span>
  );
}
