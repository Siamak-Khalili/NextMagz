"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { bookmarkPostApi } from "@/services/postService";
import { Bookmark } from "lucide-react";

function BookmarkButton({ post }) {
  const router = useRouter();

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
    <button
      onClick={() => bookmarkHandler(post._id)}
      className={`absolute top-4 left-4 p-2 rounded-lg backdrop-blur-sm border transition-all ${
        post.isBookmarked
          ? "bg-primary-600 border-primary-600 text-white"
          : "bg-white/90 dark:bg-black/90 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-600 hover:border-primary-600 hover:text-white"
      }`}
    >
      <Bookmark
        className={`w-4 h-4 ${post.isBookmarked ? "fill-current" : ""}`}
      />
    </button>
  );
}

export default BookmarkButton;
