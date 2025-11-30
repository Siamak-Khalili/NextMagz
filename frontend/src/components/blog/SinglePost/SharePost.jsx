"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

function SharePost() {
  const [showShareMenu, setShowShareMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-primary-600 hover:text-primary-600 transition-all"
      >
        <Share2 className="w-5 h-5" />
        <span className="text-sm font-medium">اشتراک‌گذاری</span>
      </button>

      {showShareMenu && (
        <div className="absolute left-0 mt-2 w-48 p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl z-10">
          <button className="w-full px-3 py-2 text-right text-sm rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
            کپی لینک
          </button>
          <button className="w-full px-3 py-2 text-right text-sm rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
            توییتر
          </button>
          <button className="w-full px-3 py-2 text-right text-sm rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
            لینکدین
          </button>
        </div>
      )}
    </div>
  );
}

export default SharePost;
