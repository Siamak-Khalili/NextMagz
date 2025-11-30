"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import ThemeSwitcher from "./ui/ThemeSwitcher";
import { UserRound } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    children: "بلاگ ها",
    path: "/blogs",
  },
  {
    id: 2,
    children: "درباره ما",
    path: "/about",
  },
  {
    id: 3,
    children: " تماس با ما",
    path: "/contact",
  },
];

function Header() {
  const pathname = usePathname();
  const { user, isLoading } = useAuth();
  const authRoutes = ["/signin", "/signup"];
  const isAuthRoute = authRoutes.includes(pathname);

  if (isAuthRoute || (pathname === "/signin" && hasRedirect)) {
    return null;
  }

  const isDashboardRoute =
    pathname?.startsWith("/profile") || pathname?.startsWith("/dashboard");
  if (isDashboardRoute && user) {
    return null;
  }

  return (
    <header
      className={`z-10 bg-neutral-50 dark:bg-black  sticky top-0 transition-all duration-200 border-b border-neutral-200 dark:border-neutral-700 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <nav className="container xl:max-w-screen-xl  flex items-center text-secondary-400 justify-between py-2">
        <Link
          href="/"
          className="flex items-center font-bold text-lg text-primary-700 "
        >
          <Image
            src="/images/ui/logos/transparent/miniLogo.svg"
            alt="Logo"
            width={35}
            height={35}
            priority
          />
          <span className="text-neutral-900 dark:text-neutral-100">
            نکست مگز
          </span>
        </Link>

        <ul className="hidden md:flex items-center text-secondary-400 justify-between md:w-2/4">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </li>
              );
            })}
          </div>
        </ul>

        <div className="flex items-center justify-between gap-4 md:w-1/4">
          <ThemeSwitcher />
          {user ? (
            <NavLink path="/profile">
              <div className="flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full gap-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all">
                  <UserRound className="w-4 h-4" />
                </div>
              </div>
            </NavLink>
          ) : (
            <NavLink path="/signin">
              <div className="flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full gap-1">
                <div className="flex items-center justify-center px-4 h-8 rounded-full cursor-pointer transition-all">
                  <span className="text-neutral-900 dark:text-neutral-100">
                    ورود | ثبت‌نام
                  </span>
                </div>
              </div>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
export default Header;
