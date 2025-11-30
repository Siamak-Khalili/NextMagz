"use client";

import { generatePagination } from "@/utils/generatePagination";
import classNames from "classnames";

import Link from "next/link";

import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = Number(searchParams.get("limit")) || 6;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("limit", itemsPerPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      {allPages.map((page, index) => {
        let position;
        if (index === 0) position = "first";
        if (index === allPages.length - 1) position = "last";
        if (allPages.length === 1) position = "single";
        if (page === "...") position = "middle";

        return (
          <PaginationNumber
            key={`${page}-${index}`}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        );
      })}

      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}


function PaginationNumber({ page, href, isActive, position }) {
  const className = classNames("px-4 py-2 rounded-lg transition-all", {
    "bg-primary-600 text-white": isActive,
    "text-neutral-400 cursor-default": position === "middle",
    "border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900":
      !isActive && position !== "middle",
  });

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({ href, direction, isDisabled }) {
  const className = classNames(
    "px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all",
    {
      "opacity-50 cursor-not-allowed pointer-events-none": isDisabled,
    }
  );

  const arrowText = direction === "left" ? "بعدی" : "قبلی";

  return isDisabled ? (
    <div className={className}>{arrowText}</div>
  ) : (
    <Link className={className} href={href}>
      {arrowText}
    </Link>
  );
}
