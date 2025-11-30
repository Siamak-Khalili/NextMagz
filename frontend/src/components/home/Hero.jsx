import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary-200/60 dark:from-primary-900/30 to-transparent rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-200 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>پلتفرم آموزشی پیشرو ایران</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-neutral-900 dark:text-white">نکست</span>{" "}
            <span className="bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent">
              مگز
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light">
            گام بعدی در دنیای تکنولوژی
          </p>

          <p className="text-base text-neutral-500 dark:text-neutral-500 max-w-lg mx-auto pt-2">
            به‌روزترین مقالات و آموزش‌های برنامه‌نویسی به زبان فارسی
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-primary-500/25"
            >
              <span>مطالعه بلاگ‌ها</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/profile"
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-lg font-medium hover:border-primary-600 dark:hover:border-primary-600 hover:scale-105 transition-all duration-200"
            >
              مدیریت بلاگ‌ها
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
