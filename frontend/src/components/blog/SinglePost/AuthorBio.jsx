import Avatar from "@/ui/Avatar";
import Link from "next/link";

export default function AuthorBio({ author }) {
  return (
    <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 mb-12">
      <div className="flex items-start gap-4">
        <Avatar
          width={32}
          height={32}
          alt={author.name}
          src={author.avatarUrl}
          className="w-16 h-16 rounded-full border-2 border-neutral-200 dark:border-neutral-800"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
            {author.name}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
            {/* {author.bio} */}
            فرانت‌اند دولوپر با بیش از ۳ سال تجربه{" "}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/SIAMAK_KHALILII"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              {/* @{author.social.twitter} */}
              SIAMAK_KHALILII
            </Link>

            <Link
              href="https://github.com/Siamak-Khalili"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              {/* {author.social.github} */}
              Siamak-Khalili
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
