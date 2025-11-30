import StatsCounter from "@/components/home/StatsCounter";

export default function Stats() {
  const stats = [
    { numericValue: 347, suffix: "+", label: "مقاله منتشر شده" },
    { numericValue: 5000, suffix: "+", label: "کاربر فعال" },
    { numericValue: null, displayValue: "24/7", label: "پشتیبانی" },
    { numericValue: 100, suffix: "%", label: "رضایت کاربران" },
  ];

  return (
    <section className="py-20 border-t border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-primary-100/30 dark:from-primary-900/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-1 group">
              <div className="inline-flex items-baseline text-4xl md:text-5xl font-bold bg-gradient-to-br from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent group-hover:from-primary-600 group-hover:to-primary-700 dark:group-hover:from-primary-400 dark:group-hover:to-primary-500 transition-all duration-300">
                {stat.numericValue !== null ? (
                  <>
                    <StatsCounter end={stat.numericValue} duration={2.5} />
                    <span className="text-3xl md:text-4xl ml-0.5">{stat.suffix}</span>
                  </>
                ) : (
                  <span>{stat.displayValue}</span>
                )}
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

