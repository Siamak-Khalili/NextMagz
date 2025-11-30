"use client";

import { useState } from "react";
import SortButton from "@/components/blog/SortButton";
import Sort from "@/components/blog/Sort";

export default function SortSection() {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <SortButton>
      <Sort viewMode={viewMode} setViewMode={setViewMode} />
    </SortButton>
  );
}
