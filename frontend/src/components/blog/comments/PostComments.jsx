"use client";

import Button from "@/ui/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Comment from "./Comment";
import classNames from "classnames";
import Modal from "@/ui/Modal";
import CommentForm from "./CommentForm";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";

function PostComments({ post: { comments, _id: postId, slug } }) {
  const { user } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const [parent, setParent] = useState(null);
  const router = useRouter();

  const addNewCommentHandler = (parent) => {
    if (!user) {
      router.push(
        {
          pathname: "/signin",
          query: {
            redirect: router.asPath,
          },
        },
        `/signin?redirect=${router.asPath}`
      );
      return;
    }
    setParent(parent);
    setOpen(true);
  };

  return (
    <div className="space-y-6" id="PostComments">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          نظرات ({comments.length})
        </h2>
        <button
          onClick={() => addNewCommentHandler(null)}
          variant="outline"
          className="flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors text-sm font-medium"
        >
          <QuestionMarkCircleIcon className="w-4 ml-2" />
          <span>ثبت نظر جدید</span>
        </button>
        <Modal
          title={parent ? "پاسخ به نظر" : "نظر جدید"}
          description={parent ? parent.user.name : "نظر خود را وارد کنید"}
          open={isOpen}
          onClose={() => setOpen(false)}
        >
          <CommentForm
            postId={postId}
            postSlug={slug}
            parentId={parent ? parent._id : null}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </div>
      <div className="p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-center">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div key={comment._id}>
                <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
                  <Comment
                    comment={comment}
                    onAddComment={() => addNewCommentHandler(comment)}
                  />
                </div>
                <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                  {comment.answers.map((item, index) => {
                    return (
                      <div key={item._id} className="relative">
                        <div
                          className={classNames(
                            "answer-item border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4",
                            {
                              "last-item": index + 1 === comment.answers.length,
                            }
                          )}
                        >
                          <Comment comment={item} key={item._id} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-neutral-400" />
            <p className="text-neutral-600 dark:text-neutral-400">
              هنوز نظری ثبت نشده است. اولین نفری باشید که نظر می‌دهید!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostComments;
