import SearchResultsHeader from "@/components/blog/SearchResultHeader";
import PostsContainer from "../../../../components/blog/PostsContainer";
import { getPosts } from "@/services/postService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";

async function BlogPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const queries = queryString.stringify(resolvedSearchParams);
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const { posts, totalPages } = await getPosts(queries, options);

  const { search } = await searchParams;

  return (
    <div>
      <PostsContainer posts={posts} totalPages={totalPages} />
      <SearchResultsHeader search={search} postsCount={posts.length} />
    </div>
  );
}

export default BlogPage;
