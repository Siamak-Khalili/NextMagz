import {
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  comments: ChatBubbleBottomCenterTextIcon,
  users: UserGroupIcon,
  posts: DocumentIcon,
};

export function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div
      className="group relative p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary-600 dark:hover:border-primary-600 transition-all duration-300"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-neutral-50 to-transparent dark:from-neutral-900 dark:to-transparent pointer-events-none" />

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-100 to-transparent dark:from-primary-900/20 dark:to-transparent pointer-events-none" />

      <div className="relative space-y-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-lg border border-neutral-200 dark:border-neutral-600 flex items-center justify-center group-hover:scale-110  transition-all duration-300">
            {Icon ? <Icon className="h-5 w-5" /> : null}
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p
          className={`truncate  rounded-2xl border border-neutral-200 dark:border-neutral-600 px-4 py-8 text-center text-2xl text-secondary-500`}
        >
          {value}
        </p>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_0_1px_rgba(124,58,237,0.1)] dark:shadow-[0_0_0_1px_rgba(124,58,237,0.2)]" />
    </div>
  );
}
