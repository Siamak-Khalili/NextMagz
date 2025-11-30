import Link from "next/link";

export default function AllTags({ tags = [] }) {
  if (!tags || tags.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500 dark:text-neutral-400">
          هنوز هیچ تگی وجود ندارد.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
        تگ‌های محبوب
      </h3>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          return (
            <Link
              key={tag.name}
              href={`/blogs?page=1&limit=6&search=${encodeURIComponent(
                tag.name
              )}`}
              className={`px-3 py-1.5 text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 cursor-pointer transition-all`}
            >
              #{tag.name}
              <span className="">{tag.count}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
