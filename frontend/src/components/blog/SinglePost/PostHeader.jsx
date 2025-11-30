
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import Avatar from "@/ui/Avatar";

export default function PostHeader({ post }) {
  return (
    <header className="mb-12 space-y-6">
      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-all">
        <span>{post.category.title}</span>
        <ChevronLeft className="w-4 h-4" />
      </button>

      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <Avatar
            width={32}
            height={32}
            alt={post.author.name}
            src={post.author.avatarUrl}
            className="w-10 h-10 rounded-full border-2 border-neutral-200 dark:border-neutral-800"
          />
          <span className="font-medium text-neutral-900 dark:text-white">
            {post.author.name}
          </span>
        </div>

        <span>•</span>

        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <time>{toLocalDateShort(post.updatedAt ?? post.createdAt)}</time>
        </div>

        <span>•</span>

        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{toPersianDigits(post.readingTime)}</span>
        </div>
      </div>
    </header>
  );
}
