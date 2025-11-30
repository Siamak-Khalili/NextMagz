import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import LastPosts from "@/components/home/LastPosts";
import { getPosts } from "@/services/postService";
import CTA from "@/components/home/CTA";

export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "force-cache";

export default async function Home() {
  const { posts } = await getPosts("", { cache: "no-store" });

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Hero />

      <Features />

      <Stats />

      <LastPosts posts={posts} />

      <CTA />
    </div>
  );
}
