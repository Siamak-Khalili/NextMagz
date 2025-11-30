"use client";

import Link from "next/link";
import CoverImage from "./CoverImage";
import PostInteraction from "./PostInteraction";
import BookmarkButton from "./BookmarkButton";
import { Calendar } from "lucide-react";
import { toLocalDateShort } from "@/utils/dateFormatter";
import PostCardFooter from "./PostCardFooter";
import Avatar from "@/ui/Avatar";

function PostList({ posts, viewMode }) {
  return posts.length > 0 ? (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          : "space-y-6"
      }
    >
      {posts.map((post) => (
        <article
          key={post._id}
          className={`group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:border-primary-600 dark:hover:border-primary-600 transition-all duration-300 ${
            viewMode === "list" ? "flex flex-col md:flex-row" : ""
          }`}
        >
          <div
            className={`overflow-hidden relative bg-neutral-100 dark:bg-neutral-900 ${
              viewMode === "grid"
                ? "aspect-[16/10]"
                : "md:w-80 aspect-video md:aspect-auto"
            }`}
          >
            <CoverImage
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              {...post}
            />

            <div className="absolute top-4 right-4">
              <span className="px-3 py-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-neutral-900 dark:text-white text-xs font-medium rounded-lg border border-neutral-200 dark:border-neutral-800 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                {post.category?.name || post.category?.title}
              </span>
            </div>

            <BookmarkButton post={post} />
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Avatar
                  width={32}
                  height={32}
                  alt={post.author.name}
                  src={post.author.avatarUrl}
                  className="w-8 h-8 rounded-full border-2 border-neutral-200 dark:border-neutral-800"
                />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {post.author.name}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>
                  {toLocalDateShort(post.updatedAt ?? post.createdAt)}
                </span>
              </div>
            </div>

            <div className="min-h-[102px]">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-3 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2 flex-1">
                {post.text}
              </p>
            </div>

            <PostCardFooter post={post} />
          </div>
        </article>
      ))}
    </div>
  ) : null;
}

export default PostList;
