import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import Search from "@/ui/Search";
import { getPosts } from "@/services/postService";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";
import PostsTable from "@/components/dashboard/posts/PostsTable";
import { CreatePost } from "@/components/dashboard/posts/Buttons";

async function Page({ searchParams }) {
  const params = await searchParams;
  const query = queryString.stringify(params);

  const { totalPages } = await getPosts(query);

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-secondary-700 font-bold text-xl col-span-2 md:col-span-1 order-1">
          لیست پست‌ها
        </h1>

        <div className="order-3 md:order-2 col-span-3 md:col-span-1">
          <Search />
        </div>

        <div className="order-2 md:order-3">
          <CreatePost />
        </div>
      </div>

      <Suspense fallback={<Fallback />} key={query}>
        <PostsTable query={query} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Page;
