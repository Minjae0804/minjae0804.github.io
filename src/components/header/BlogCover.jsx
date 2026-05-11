import blog from "../../config/blog.json";

export default function BlogCover() {
  return (
    <div className="h-48 sm:h-64 md:h-80 bg-brown-600 dark:bg-brown-900 flex items-end">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-brown-50 dark:text-brown-100">
          {blog.title}
        </h1>
        <p className="mt-1.5 text-sm sm:text-base text-brown-300 dark:text-brown-300 max-w-md">
          &nbsp;{blog.description}
        </p>
      </div>
    </div>
  );
}
