import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/profile",
  },

  {
    id: 2,
    title: "پست ها",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    href: "/profile/posts",
  },
  {
    id: 3,
    title: "نظرات",
    icon: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
    href: "/profile/comments",
  },
  // {
  //   id: 4,
  //   title: "دسته بندی ها",
  //   icon: <Squares2X2Icon className="w-5 h-5" />,
  //   href: "/profile/categories",
  // },
  {
    id: 4,
    title: "کاربران",
    icon: <UsersIcon className="w-5 h-5" />,
    href: "/profile/users",
  },
];

export default function SideBarNavs() {
  const router = useRouter();
  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center gap-3  py-3 rounded-xl text-neutral-900 hover:bg-primary-100 hover:text-primary-600 dark:text-neutral-100  dark:hover:bg-primary-900  transition-all duration-300",
                {
                  "bg-primary-100/40 !font-bold text-primary-600":
                    router.pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              <span>{nav.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
