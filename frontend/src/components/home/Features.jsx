import { BookOpen, Rocket, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "آموزش‌های تخصصی",
      description:
        "مقالات جامع و آموزش‌های قدم به قدم در زمینه برنامه‌نویسی و تکنولوژی‌های مدرن با رویکردی عملی و کاربردی",
    },
    {
      icon: Rocket,
      title: "محتوای به‌روز",
      description:
        "آخرین اخبار و تکنولوژی‌های روز دنیای برنامه‌نویسی را از ما بشنوید و همیشه یک قدم جلوتر باشید",
    },
    {
      icon: Sparkles,
      title: "جامعه فارسی‌زبان",
      description:
        "محتوای تخصصی به زبان فارسی برای توسعه‌دهندگان ایرانی با تمرکز بر نیازهای واقعی بازار کار",
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-14 text-neutral-900 dark:text-white">
          چرا نکست مگز؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary-600 dark:hover:border-primary-600 transition-all duration-300"
                style={{ transform: "translateZ(0)" }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-neutral-50 to-transparent dark:from-neutral-900 dark:to-transparent pointer-events-none" />

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-100 to-transparent dark:from-primary-900/20 dark:to-transparent pointer-events-none" />

                <div className="relative space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 border border-primary-200 dark:border-primary-900 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-300">
                    <Icon
                      className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_0_1px_rgba(124,58,237,0.1)] dark:shadow-[0_0_0_1px_rgba(124,58,237,0.2)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
