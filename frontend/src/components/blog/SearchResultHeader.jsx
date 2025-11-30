import { Search } from "lucide-react";

export default function SearchResultsHeader({ search, postsCount }) {
  if (!search || postsCount > 0) return null;

  return (
    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/30 border border-primary-200 dark:border-primary-800">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-primary-600/10 dark:bg-primary-600/20 flex-shrink-0">
          <Search className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>

        <div>
          <h2 className="text-lg font-medium text-neutral-900 dark:text-white">
            هیچ نتیجه‌ای برای جستجوی{" "}
            <span className="text-xl font-bold text-primary-700 dark:text-primary-400">
              "{search}"
            </span>{" "}
            یافت نشد
          </h2>

          <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-3">
            لطفاً عبارت دیگری امتحان کنید یا فیلترها را تغییر دهید.
          </p>
        </div>
      </div>
    </div>
  );
}
