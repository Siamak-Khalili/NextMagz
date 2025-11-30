import ResponsiveSidebar from "../../../../components/blog/ResponsiveSidebar";
import SortSection from "../../../../components/blog/SortSection";

export const metadata = {
  title: "وبلاگ",

  description:
    "       به‌روزترین مقالات، آموزش‌ها و تحلیل‌های دنیای برنامه‌نویسی و فناوری را  در NextMagz دنبال کنید.",
};

function Layout({ children }) {
  return (
    <div>
      <section className="relative py-16 md:py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="absolute  inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container xl:max-w-screen-xl px-4 relative ">
          <div className="max-w-3xl  mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white">
              مقالات و بلاگ‌ها
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              جدیدترین مطالب آموزشی و تخصصی در حوزه‌های مختلف
            </p>
          </div>
        </div>
      </section>

      <div className="lg:container xl:max-w-screen-xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
          <div className="flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4 lg:gap-0 p-4 lg:p-0 rounded-xl lg:rounded-none border lg:border-0 border-neutral-200 dark:border-neutral-800 bg-white lg:bg-transparent dark:bg-neutral-900 dark:lg:bg-transparent">
            <ResponsiveSidebar />
            <SortSection />
          </div>
          <div className="lg:col-span-3 space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
