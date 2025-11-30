import { toPersianDigits } from "@/utils/numberFormatter";
import { ArrowLeft, Clock, Heart, MessageCircle } from "lucide-react";

function PostCardFooter({ post }) {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
          <Heart className="w-4 h-4" />
          <span>{toPersianDigits(post.likesCount)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
          <MessageCircle className="w-4 h-4" />
          <span>{toPersianDigits(post.commentsCount)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
          <Clock className="w-4 h-4" />
          <span>{toPersianDigits(post.readingTime)} </span>
        </div>
      </div>

      <button className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
        <span>ادامه مطلب</span>
        <ArrowLeft className="w-4 h-4" />
      </button>
    </div>
  );
}

export default PostCardFooter;
