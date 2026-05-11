export default function CopyRight() {
  const year = new Date().getFullYear();

  return (
    <p className="text-sm text-gray-400 dark:text-gray-500">
      © {year} minjae0804. All rights reserved.
    </p>
  );
}
