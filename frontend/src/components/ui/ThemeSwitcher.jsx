"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <fieldset className="theme-switcher flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full gap-1">
      <legend className="sr-only">انتخاب تم نمایش</legend>

      <span className="relative">
        <input
          type="radio"
          name="theme"
          value="system"
          id="theme-system"
          checked={theme === "system"}
          onChange={() => setTheme("system")}
          className="sr-only peer"
        />
        <label
          htmlFor="theme-system"
          className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer 
                     peer-checked:bg-white dark:peer-checked:bg-black
                     peer-checked:border peer-checked:border-l peer-checked:border-neutral-700
                     hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <ComputerDesktopIcon
            className={`w-4 h-4 
              ${
                theme === "system"
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-600 dark:text-neutral-400"
              }
            `}
          />
        </label>
      </span>

      <span className="relative">
        <input
          type="radio"
          name="theme"
          value="light"
          id="theme-light"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
          className="sr-only peer"
        />
        <label
          htmlFor="theme-light"
          className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer 
                     peer-checked:bg-white peer-checked:shadow peer-checked:border
                     peer-checked:border-neutral-200 dark:peer-checked:bg-black
                     hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <SunIcon
            className={`w-4 h-4 
              ${
                theme === "light"
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-600 dark:text-neutral-400"
              }
            `}
          />
        </label>
      </span>

      <span className="relative">
        <input
          type="radio"
          name="theme"
          value="dark"
          id="theme-dark"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
          className="sr-only peer"
        />
        <label
          htmlFor="theme-dark"
          className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer 
                     peer-checked:bg-white dark:peer-checked:bg-black
                     peer-checked:border peer-checked:border-r peer-checked:border-neutral-700
                     hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <MoonIcon
            className={`w-4 h-4 
              ${
                theme === "dark"
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-600 dark:text-neutral-400"
              }
            `}
          />
        </label>
      </span>
    </fieldset>
  );
}
