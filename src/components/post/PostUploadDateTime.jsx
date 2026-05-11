export default function PostUploadDateTime({ date = "" }) {
  const formatted = date
    ? new Date(date).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <time
      dateTime={date}
      className="text-xs text-stone-400 dark:text-stone-500"
    >
      {formatted}
    </time>
  );
}
