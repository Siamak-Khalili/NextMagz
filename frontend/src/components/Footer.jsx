"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-4 ">
      <div className="container xl:max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-700 dark:text-neutral-400 tracking-tight">
          © {year} Siamak Khalili — All rights reserved
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Siamak-Khalili"
            className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
          >
            <Github className="w-4 h-4" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/siamak-kh/"
            className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
          >
            <Linkedin className="w-4 h-4" />
          </Link>

          <Link
            href="mailto:siamak.khalili77@gmail.com"
            className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
