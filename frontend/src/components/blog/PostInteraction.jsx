"use client";

import { bookmarkPostApi, likePostApi } from "@/services/postService";
import { toPersianDigits } from "@/utils/numberFormatter";
import { Bookmark, Heart, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function PostInteraction({ post }) {
  const router = useRouter();

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => likeHandler(post._id)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
          post.isLiked
            ? "bg-red-50 border-red-200 text-red-600 dark:bg-red-950/20 dark:border-red-900 dark:text-red-400"
            : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-red-200 hover:text-red-600"
        }`}
      >
        <Heart className={`w-5 h-5 ${post.isLiked ? "fill-current" : ""}`} />
        <span className="text-sm font-medium">{post.likesCount}</span>
      </button>

      <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-primary-600 hover:text-primary-600 transition-all">
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">
          {toPersianDigits(post.commentsCount)}
        </span>
      </button>

      <button
        onClick={() => bookmarkHandler(post._id)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
          post.isBookmarked
            ? "bg-primary-50 border-primary-200 text-primary-600 dark:bg-primary-900/20 dark:border-primary-900 dark:text-primary-400"
            : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-primary-600 hover:text-primary-600"
        }`}
      >
        <Bookmark className={`w-5 h-5 ${post.isBookmarked ? "fill-current" : ""}`} />
      </button>
    </div>
  );
}

export default PostInteraction;
