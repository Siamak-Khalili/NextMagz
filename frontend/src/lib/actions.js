"use server";
import { cookies } from "next/headers";
import setCookiesOnReq from "../utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { createCommentApi } from "@/services/commentService";

export async function createComment(
  prevState,
  { formData, postId, parentId, postSlug }
) {
  const cookieStore = await cookies();

  const rawFormData = {
    text: formData.get("text"),
    postId,
    parentId,
  };
  try {
    const options = setCookiesOnReq(cookieStore);
    const {
      data: { message },
    } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs");
    if (postSlug) {
      revalidatePath(`/blogs/${postSlug}`);
    }
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
