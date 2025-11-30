"use client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmissionButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../../app/(blogs)/blogs/loading";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, postSlug, parentId, onClose }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState);
  const ref = useRef(null);
  let isLoading = false;

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      setText("");
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            ref={ref}
            className="space-y-7"
            action={async (formData) => {
              await formAction({ formData, postId, postSlug, parentId });
              ref?.current?.reset();
            }}
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-8">
              {isLoading ? (
                <div>
                  <Loading />
                </div>
              ) : (
                <SubmitButton type="submit" className="w-full">
                  {parentId ? "ثبت پاسخ" : "ثبت نظر"}
                </SubmitButton>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
