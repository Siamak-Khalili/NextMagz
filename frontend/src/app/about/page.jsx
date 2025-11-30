import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Code2,
  Palette,
  Rocket,
  ArrowLeft,
} from "lucide-react";

export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "force-cache";

export const metadata = {
  title: "درباره ما | نکست مگز",
  description:
    "نکست مگز - پلتفرم آموزشی برنامه‌نویسی به زبان فارسی. ساخته شده توسط سیامک خلیلی",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white">
            درباره{" "}
            <span className="bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent">
              نکست مگز
            </span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            پلتفرم آموزشی پیشرو در ایران برای توسعه‌دهندگان فارسی‌زبان
          </p>
        </div>

        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary-200/50 to-transparent dark:from-primary-900/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              درباره پروژه
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong>نکست مگز</strong> یک <strong>پلتفرم آموزشی مدرن</strong>{" "}
                است که با استفاده از فناوری‌های پیشرفته مانند{" "}
                <strong>Next.js 15 (App Router)</strong>،{" "}
                <strong>Tailwind CSS</strong>، و <strong>REST API</strong> ساخته
                شده.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mt-4">
                این پروژه به عنوان یک <strong>نمونه کار حرفه‌ای</strong> طراحی
                شده تا قابلیت‌های یک فرانت‌اند دولوپر را در ساخت سیستم‌های
                مقیاس‌پذیر، زیبا و کاربرپسند به نمایش بگذارد. از ویژگی‌های کلیدی
                می‌توان به <strong>دارک مود</strong>،{" "}
                <strong>صفحه‌بندی هوشمند</strong>،{" "}
                <strong>لایک و بوکمارک</strong>، <strong>کامت‌ها</strong> و{" "}
                <strong>SEO کامل</strong> اشاره کرد.
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              سیامک خلیلی
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              <strong>فرانت‌اند دولوپر</strong> با بیش از ۳ سال تجربه در ساخت
              وب‌اپلیکیشن‌های مدرن
            </p>
            <div className="space-y-3 text-neutral-700 dark:text-neutral-300">
              <p>
                من عاشق تبدیل ایده‌ها به رابط‌های کاربری زیبا و کارآمد هستم.
                تخصص اصلی من در <strong>React</strong> و{" "}
                <strong>Next.js</strong> است و همیشه به دنبال بهترین شیوه‌های
                توسعه و تجربه کاربری هستم.
              </p>
              <p>
                این پروژه (نکست مگز) یکی از بهترین نمونه کارهای من است که تمام
                مهارت‌های من در <strong>طراحی سیستم</strong>،{" "}
                <strong>بهینه‌سازی عملکرد</strong>، <strong>UI/UX</strong> و{" "}
                <strong>کدنویسی تمیز</strong> را به نمایش می‌گذارد.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind",
                "REST API",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <Link
                href="https://github.com/Siamak-Khalili"
                className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                target="_blank"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/SIAMAK_KHALILII"
                className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                target="_blank"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/siamak-kh/"
                className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:siamak.khalili77@gmail.com"
                className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/50 dark:to-primary-900/20 p-2">
              <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-white dark:ring-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-transparent" />
                <img
                  src="/avatar/siamak-khalili.jpg"
                  alt="سیامک خلیلی"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Code2,
              title: "کدنویسی تمیز",
              desc: "استفاده از بهترین شیوه‌های React و Next.js",
            },
            {
              icon: Palette,
              title: "طراحی زیبا",
              desc: "رابط کاربری مدرن با Tailwind و انیمیشن‌های نرم",
            },
            {
              icon: Rocket,
              title: "عملکرد بالا",
              desc: "بهینه‌سازی سرعت و SEO با SSG و ISR",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-primary-600 dark:hover:border-primary-600 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </section>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium text-lg hover:scale-105 transition-all duration-200 shadow-lg shadow-primary-500/25"
          >
            <span>تماس با من</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
