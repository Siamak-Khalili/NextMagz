import Link from "next/link";

export default function PostTags({ tags = [] }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blogs?page=1&limit=6&search=${encodeURIComponent(tag)}`}
          className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300 hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-all"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
