"use client";

import { useState } from "react";
import PostList from "./PostList";
import Pagination from "@/ui/Pagination";
import Sort from "./Sort";

export default function PostsContainer({ posts, totalPages }) {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="lg:col-span-3 space-y-6">
      <div className="hidden lg:block">
        <Sort viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      

      <PostList posts={posts} viewMode={viewMode} />

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
