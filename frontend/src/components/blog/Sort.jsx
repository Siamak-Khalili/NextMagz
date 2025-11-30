"use client";

import { Grid, List } from "lucide-react";
import { useState } from "react";

function Sort({ viewMode, setViewMode }) {
  const [sortBy, setSortBy] = useState("latest");

  const sortOptions = [
    { id: "latest", name: "جدیدترین" },
    { id: "popular", name: "محبوب‌ترین" },
    { id: "trending", name: "پرطرفدار" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-3">
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          مرتب‌سازی:
        </span>
        <div className="flex gap-2">
          {sortOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSortBy(option.id)}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                sortBy === option.id
                  ? "bg-primary-600 text-white"
                  : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-2 rounded-lg transition-all ${
            viewMode === "grid"
              ? "bg-primary-600 text-white"
              : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
          }`}
        >
          <Grid className="w-5 h-5" />
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`p-2 rounded-lg transition-all ${
            viewMode === "list"
              ? "bg-primary-600 text-white"
              : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
          }`}
        >
          <List className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Sort;
