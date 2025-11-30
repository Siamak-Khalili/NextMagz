"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children }) {
  const pathname = usePathname();

  return (
    <Link
      className={`block py-2 transition-all ease-out ${
        pathname === path
          ? "text-neutral-900 dark:text-neutral-100 font-semibold"
          : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 "
      }`}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
