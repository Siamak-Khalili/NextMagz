import Link from "next/link";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function LastPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-14 text-neutral-900 dark:text-white">
            آخرین مقالات
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {posts.slice(0, 3).map((post) => (
            <article
              key={post._id}
              className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:border-primary-600 dark:hover:border-primary-600 transition-all duration-300"
              style={{ transform: "translateZ(0)" }}
            >
              <Link href={`/blogs/${post.slug}`} className="block">
                <div className="aspect-[16/10] overflow-hidden relative bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-primary-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-neutral-900 dark:text-white text-xs font-medium rounded-lg border border-neutral-200 dark:border-neutral-800 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                      {post.category.title}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500">
                  <span>
                    {toLocalDateShort(post.updatedAt ?? post.createdAt)}
                  </span>
                  <span>•</span>
                  <span>{toPersianDigits(post.readingTime)} دقیقه مطالعه</span>
                </div>

                <Link href={`/blogs/${post.slug}`} className="block">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {post.text}
                </p>

                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 pt-2 group-hover:gap-3 transition-all"
                >
                  <span>ادامه مطلب</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_0_1px_rgba(124,58,237,0.1)] dark:shadow-[0_0_0_1px_rgba(124,58,237,0.2)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
