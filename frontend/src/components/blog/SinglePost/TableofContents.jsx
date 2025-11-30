"use client";

import { Facebook, Link2, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

function TableofContents() {
  const [activeSection, setActiveSection] = useState("intro");

  const tablesContent = {
    sections: [
      { id: "intro", title: "مقدمه", icon: "📖" },
      { id: "luxury", title: "هتل‌های لوکس", icon: "⭐" },
      { id: "budget", title: "هتل‌های اقتصادی", icon: "💰" },
      { id: "tips", title: "نکات مهم", icon: "💡" },
      { id: "conclusion", title: "نتیجه‌گیری", icon: "✅" },
    ],
  };

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-24 space-y-6">
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
            <span>فهرست مطالب</span>
          </h3>
          <nav className="space-y-2">
            {tablesContent.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-right px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                  activeSection === section.id
                    ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                }`}
              >
                <span>{section.icon}</span>
                <span>{section.title}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
            اشتراک‌گذاری
          </h3>
          <div className="flex flex-col gap-2">
            <button className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center gap-3 text-sm">
              <Facebook className="w-4 h-4" />
              <span>فیسبوک</span>
            </button>
            <button className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-sky-500 hover:text-sky-500 transition-all flex items-center gap-3 text-sm">
              <Twitter className="w-4 h-4" />
              <span>توییتر</span>
            </button>
            <button className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-blue-700 hover:text-blue-700 transition-all flex items-center gap-3 text-sm">
              <Linkedin className="w-4 h-4" />
              <span>لینکدین</span>
            </button>
            <button className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-primary-600 hover:text-primary-600 transition-all flex items-center gap-3 text-sm">
              <Link2 className="w-4 h-4" />
              <span>کپی لینک</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default TableofContents;
