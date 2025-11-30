"use client";

import Avatar from "@/ui/Avatar";
import { useState } from "react";
import { deleteCommentApi, updateCommentApi } from "@/services/commentService";
import toast from "react-hot-toast";
import {
  CheckCircleIcon,
  XCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function CommentsTable({ comments = [] }) {
  const [commentsList, setCommentsList] = useState(comments);
  const [isDeleting, setIsDeleting] = useState(null);
  const [isUpdating, setIsUpdating] = useState(null);

  const handleUpdateStatus = async (commentId, newStatus) => {
    try {
      setIsUpdating(commentId);
      await updateCommentApi({ id: commentId, data: { status: newStatus } });
      setCommentsList(
        commentsList.map((comment) =>
          comment._id === commentId
            ? { ...comment, status: newStatus }
            : comment
        )
      );
      toast.success("وضعیت نظر به‌روزرسانی شد");
    } catch (error) {
      toast.error("خطا در به‌روزرسانی نظر");
      console.error(error);
    } finally {
      setIsUpdating(null);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm("آیا مطمئن هستید؟")) return;

    try {
      setIsDeleting(commentId);
      await deleteCommentApi(commentId);
      setCommentsList(commentsList.filter((c) => c._id !== commentId));
      toast.success("نظر حذف شد");
    } catch (error) {
      toast.error("خطا در حذف نظر");
      console.error(error);
    } finally {
      setIsDeleting(null);
    }
  };

  if (commentsList.length === 0) {
    return (
      <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-lg text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          هنوز نظری ثبت نشده است
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
              نظر
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              تاریخ
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              وضعیت
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              عملیات
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
          {commentsList.map((comment) => (
            <tr
              key={comment._id}
              className="hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <Avatar
                    width={32}
                    height={32}
                    src={comment.user?.avatarUrl}
                    alt={comment.user?.name}
                  />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {comment.user?.name}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate max-w-xs">
                  {comment.content?.text}
                </p>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {comment.createdAt}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateStatus(comment._id, 2)}
                    disabled={
                      isUpdating === comment._id || comment.status === 2
                    }
                    className="p-1 rounded text-green-600 hover:bg-green-100 disabled:opacity-50 transition-colors"
                    title="تایید"
                  >
                    <CheckCircleIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(comment._id, 0)}
                    disabled={
                      isUpdating === comment._id || comment.status === 0
                    }
                    className="p-1 rounded text-red-600 hover:bg-red-100 disabled:opacity-50 transition-colors"
                    title="رد کردن"
                  >
                    <XCircleIcon className="w-5 h-5" />
                  </button>
                </div>
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => handleDeleteComment(comment._id)}
                  disabled={isDeleting === comment._id}
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

export default CommentsTable;
