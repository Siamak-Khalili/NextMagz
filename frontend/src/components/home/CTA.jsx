import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function CTA() {
  return (
    <section className="py-32 border-t border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-transparent to-primary-500/20 dark:to-primary-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            آماده شروع هستید؟
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            همین حالا به جمع نویسندگان و خوانندگان بپیوندید
          </p>

          <div className="pt-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-primary-500/25"
            >
              <span>شروع رایگان</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
