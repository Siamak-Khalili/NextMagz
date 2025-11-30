"use client";

import deletePost from "@/app/(dashboard)/profile/posts/_/actions/deletePost";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import toast from "react-hot-toast";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end group flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-primary-500/25"
    >
      <span>ایجاد پست</span>{" "}
      <PlusIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
    </Link>
  );
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}

export function DeletePost({ id: postId, postTitle }) {
  const [isPending, startTransition] = useTransition();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleDelete = async () => {
    startTransition(async () => {
      try {
        const result = await deletePost(null, { postId });

        if (result?.message) {
          toast.success(result.message);
          setIsDeleteOpen(false);
        }
        if (result?.error) {
          toast.error(result.error);
        }
      } catch (error) {
        toast.error("خطا در حذف پست");
      }
    });
  };

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف ${postTitle}`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          resourceName={postTitle}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={handleDelete}
          disabled={isPending}
        />
      </Modal>
    </>
  );
}
