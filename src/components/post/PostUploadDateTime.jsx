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
      className="text-xs text-gray-400 dark:text-gray-500"
    >
      {formatted}
    </time>
  );
}
