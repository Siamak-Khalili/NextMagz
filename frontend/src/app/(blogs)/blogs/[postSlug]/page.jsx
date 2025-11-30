import PostComments from "@/components/blog/comments/PostComments";
import PostInteraction from "@/components/blog/PostInteraction";
import ReadingProgress from "@/components/blog/ReadingProgress";
import AuthorBio from "@/components/blog/SinglePost/AuthorBio";
import PostHeader from "@/components/blog/SinglePost/PostHeader";
import PostTags from "@/components/blog/SinglePost/PostTags";
import RelatedPost from "@/components/blog/SinglePost/RelatedPost";
import SharePost from "@/components/blog/SinglePost/SharePost";
import TableofContents from "@/components/blog/SinglePost/TableofContents";
import { getPostBySlug } from "@/services/postService";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);
  return {
    title: post?.title,
    description: post?.briefText,
  };
}

async function SinglePost({ params }) {
  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);

  if (!post) {
    return <p className="text-lg text-secondary-600">پست مورد نظر یافت نشد</p>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <ReadingProgress />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <TableofContents />

          <main
            className={`order-first lg:order-none ${
              post.related?.length > 0
                ? "lg:col-span-6 lg:col-start-4"
                : "lg:col-span-9 lg:col-start-4"
            }`}
          >
            <article id="article-content">
              <PostHeader post={post} />

              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 group w-full h-[300px]">
                <Image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  fill
                  src={post.coverImageUrl}
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-16 space-y-8">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {post.text}
                </p>
              </div>

              <PostTags tags={post.tags} />

              <div className="flex items-center justify-between py-6 border-y border-neutral-200 dark:border-neutral-800 mb-12">
                <PostInteraction post={post} />

                <SharePost />
              </div>

              <AuthorBio author={post.author} />

              <Suspense fallback={<div>در حال بارگذاری نظرات...</div>}>
                <PostComments post={post} />
              </Suspense>
            </article>
          </main>

          {post.related.length > 0 ? (
            <RelatedPost posts={post.related} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default SinglePost;
