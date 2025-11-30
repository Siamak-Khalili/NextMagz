"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import ButtonIcon from "@/ui/ButtonIcon";
import Avatar from "@/ui/Avatar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Drawer from "@/ui/Drawer";
import { useState } from "react";
import SideBar from "./SideBar";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import NavLink from "../NavLink";
import { UserRound } from "lucide-react";

function Header({}) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();
  return (
    <header
      className={` bg-neutral-50 dark:bg-black   transition-all duration-200 border-b border-neutral-200 dark:border-neutral-700 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <ButtonIcon
          className="block lg:hidden border-none"
          variant="outline"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>
        <div className="flex items-center gap-x-3">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-x-2">
            <span className="text-sm lg:text-lg font-bold text-secondary-700">
              سلام؛ {user?.name}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <ThemeSwitcher />

          {user ? (
            <Avatar
              className="w-[32px] h-[32px]"
              alt={user?.name}
              src={user?.avatarUrl}
            />
          ) : (
            <NavLink path="/profile">
              <div className="flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full gap-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all">
                  <UserRound className="w-4 h-4" />
                </div>
              </div>
            </NavLink>
          )}

          <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
            <SideBar onClose={() => setIsOpenDrawer(false)} />
          </Drawer>
        </div>
      </div>
    </header>
  );
}
export default Header;
