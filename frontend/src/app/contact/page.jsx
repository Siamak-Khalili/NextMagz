import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "force-cache";

export const metadata = {
  title: "تماس با ما | نکست مگز",
  description: "با سیامک خلیلی، توسعه‌دهنده فرانت‌اند، در ارتباط باشید",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <div className=" mb-16 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white">
            تماس با
            <span className="bg-gradient-to-br from-primary-400 to-primary-900 bg-clip-text text-transparent">
              من
            </span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl ">
            سوالی دارید؟ پروژه‌ای در ذهن دارید؟ خوشحال می‌شم بشنوم!
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <section className="order-1  space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                راه‌های ارتباطی
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      ایمیل
                    </p>
                    <Link
                      href="mailto:siamak.khalili77@gmail.com"
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      siamak.khalili77@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      تلفن
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      در دسترس از طریق ایمیل
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      مکان
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      ایران آذربایجان غربی، اشنویه
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                من رو دنبال کنید
              </h3>
              <div className="flex gap-3">
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
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-800">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                <strong>پاسخ‌دهی:</strong> معمولاً ظرف <strong>۲۴ ساعت</strong>{" "}
                پاسخ می‌دم.
              </p>
            </div>
          </section>

          <section className="order-2 ">
            <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl p-8 md:p-10 border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                پیام بفرستید
              </h2>

              <form action="/api/contact" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    >
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-600 focus:ring-4 focus:ring-primary-500/20 transition-all"
                      placeholder="سیامک خلیلی"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    >
                      ایمیل
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-600 focus:ring-4 focus:ring-primary-500/20 transition-all"
                      placeholder="siamak@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    موضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-600 focus:ring-4 focus:ring-primary-500/20 transition-all"
                    placeholder="همکاری در پروژه"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    پیام شما
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-600 focus:ring-4 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="سلام سیامک، من یک ایده عالی دارم..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium text-lg hover:scale-105 transition-all duration-200 shadow-lg shadow-primary-500/25"
                >
                  <span>ارسال پیام</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </section>
        </div>

        <div className="text-center mt-20">
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            آماده همکاری در پروژه‌های بزرگ و کوچک
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-xl font-medium hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all"
          >
            <span>بیشتر درباره من</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
