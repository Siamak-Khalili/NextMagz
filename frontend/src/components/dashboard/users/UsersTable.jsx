"use client";

import Avatar from "@/ui/Avatar";
import { useState } from "react";
import http from "@/services/httpService";
import toast from "react-hot-toast";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

function UsersTable({ users = [] }) {
  const [usersList, setUsersList] = useState(users);
  const [isDeleting, setIsDeleting] = useState(null);

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("آیا مطمئن هستید؟ این کار نمی‌تواند برگردانده شود")) {
      return;
    }

    try {
      setIsDeleting(userId);
      await http.delete(`/user/${userId}`);
      setUsersList(usersList.filter((u) => u._id !== userId));
      toast.success("کاربر حذف شد");
    } catch (error) {
      toast.error("خطا در حذف کاربر");
      console.error(error);
    } finally {
      setIsDeleting(null);
    }
  };

  if (usersList.length === 0) {
    return (
      <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-lg text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          هیچ کاربری پیدا نشد
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-neutral-100 dark:bg-neutral-700">
          <tr>
            <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              کاربر
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              ایمیل
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              بیوگرافی
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              تاریخ عضویت
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              عملیات
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
          {usersList.map((user) => (
            <tr
              key={user._id}
              className="hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <Avatar
                    width={36}
                    height={36}
                    src={user.avatarUrl || user.avatar}
                    alt={user.name}
                  />
                  <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {user.name}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {user.email}
                </span>
              </td>
              <td className="px-4 py-3">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate max-w-xs">
                  {user.biography || "-"}
                </p>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {new Date(user.createdAt).toLocaleDateString("fa-IR")}
                </span>
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  disabled={isDeleting === user._id}
                  className="p-1 rounded text-red-600 hover:bg-red-100 disabled:opacity-50 transition-colors"
                  title="حذف"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
