"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import BottomSheet from "../ui/BottomSheet";

function SortButton({ children }) {
  const [isSortSheetOpen, setIsSortSheetOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden flex justify-center">
        <button
          onClick={() => setIsSortSheetOpen(true)}
          className="p-2 bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 rounded-2xl  hover:shadow-xl hover:border-primary-600 dark:hover:border-primary-500 transition-all duration-300 hover:scale-110 active:scale-95 group"
        >
          <ArrowUpDown className="w-5 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
        </button>
      </div>

      <BottomSheet
        isOpen={isSortSheetOpen}
        onClose={() => setIsSortSheetOpen(false)}
        title="مرتب‌سازی"
      >
        {children}
      </BottomSheet>
    </>
  );
}

export default SortButton;
