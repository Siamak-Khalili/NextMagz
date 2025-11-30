"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import BottomSheet from "../ui/BottomSheet";

function FilterButton({ children }) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden flex justify-center">
        <button
          onClick={() => setIsBottomSheetOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
        >
          <Filter className="w-5 h-5" />
          فیلترها
        </button>
        
      </div>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        title="فیلترها"
      >
        {children}
      </BottomSheet>
    </>
  );
}

export default FilterButton;
