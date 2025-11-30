import Search from "@/ui/Search";
import CateogryList from "./CategoryList";
import { Suspense } from "react";
import Spinner from "@/ui/spinner";
import { Filter } from "lucide-react";
import AllTags from "./AllTags";
import { getAllTags } from "@/services/postService";

async function Sidebar() {
  const tags = await getAllTags();
  console.log("Sidebar tags:", tags);

  return (
    <aside className="lg:col-span-1 space-y-6">
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />

      <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-primary-600" />
          <h3 className="font-semibold text-neutral-900 dark:text-white">
            دسته‌بندی
          </h3>
        </div>

        <Suspense fallback={<Spinner />}>
          <CateogryList />
        </Suspense>
      </div>

      <Suspense fallback={<Spinner />}>
        <AllTags tags={tags} />
      </Suspense>
    </aside>
  );
}

export default Sidebar;
