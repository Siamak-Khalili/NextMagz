import { getPosts } from "@/services/postService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import PostsContainer from "@/components/blog/PostsContainer";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  const { categorySlug } = await params;

  const resolvedSearchParams = await searchParams;
  const queries =
    queryString.stringify(resolvedSearchParams) +
    "&" +
    `categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);
  return (
    <div>
      {!posts || posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی وجود ندارد
        </p>
      ) : (
        <PostsContainer posts={posts} />
      )}
    </div>
  );
}

export default Category;
