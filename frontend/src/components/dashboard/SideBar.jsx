"use client";

import { useAuth } from "@/context/AuthContext";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ButtonIcon from "@/ui/ButtonIcon";
import SideBarNavs from "./SideBarNavs";
import Image from "next/image";
import { LogOut } from "lucide-react";

function SideBar({ onClose }) {
  const { logout } = useAuth();

  const logoutHandler = async () => {
    await logout();
  };

  return (
    <div className="overflow-y-auto flex flex-col  h-screen  border-l border-neutral-200 dark:border-neutral-700">
      <div className="flex items-center justify-between w-full mb-5 pb-5 py-5 px-6 border-b border-neutral-200 dark:border-neutral-700 ">
        <Link
          href="/"
          className="flex items-center font-bold text-lg text-primary-700 "
        >
          <Image
            src="/images/ui/logos/transparent/miniLogo.svg"
            alt="Logo"
            width={34}
            height={34}
            priority
          />
          <span className="text-neutral-900 dark:text-neutral-100">
            نکست مگز
          </span>
        </Link>
        <ButtonIcon
          onClick={onClose}
          className="block lg:hidden border-none"
          variant="outline"
        >
          <XMarkIcon />
        </ButtonIcon>
      </div>
      <div className="overflow-y-auto flex-auto py-5 px-6">
        <SideBarNavs />
      </div>
      <div className="flex items-center justify-between w-full pb-5 py-5 px-6 border-t border-neutral-200 dark:border-neutral-700 ">
        <div
          onClick={logoutHandler}
          className="flex items-center gap-3  w-full py-3 rounded-xl text-neutral-900 hover:bg-primary-100 hover:text-red-500 dark:text-neutral-100 dark:hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-200  transition-all duration-300 cursor-pointer"
        >
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
