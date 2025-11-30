"use server";

import { deletePostApi } from "@/services/postService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function deletePost(prevState, { postId }) {
  if (!postId) {
    return {
      error: "شناسه پست نامعتبر است",
    };
  }

  const cookieStore = await cookies();

  try {
    const options = setCookiesOnReq(cookieStore);
    const { message } = await deletePostApi(postId, options);

    revalidatePath("/profile/posts");

    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message || "خطای نامشخص در حذف پست";
    console.error("Delete post error:", error);

    return {
      error,
    };
  }
}
