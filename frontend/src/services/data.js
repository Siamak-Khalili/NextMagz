"use server";

import { getAllUsersApi } from "@/services/authService";
import { getAllCommentsApi } from "@/services/commentService";
import { getPosts } from "@/services/postService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export async function fetchCardData() {
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  try {
    const [usersData, commentsData, postsData] = await Promise.all([
      getAllUsersApi(options),
      getAllCommentsApi(options),
      getPosts(),
    ]);

    const numberOfUsers = Number(
      usersData?.users?.length ?? usersData?.length ?? "0"
    );
    const numberOfPosts = Number(
      postsData?.posts?.length ?? postsData?.length ?? "0"
    );
    const numberOfComments = Number(
      commentsData?.comments?.length ?? commentsData?.length ?? "0"
    );

    return {
      numberOfPosts,
      numberOfUsers,
      numberOfComments,
    };
  } catch (error) {
    console.error(
      "خطا",
      error?.response?.data?.message || error?.message || error
    );
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}

export async function fetchLatestPosts() {

  await new Promise((resolve) => setTimeout(resolve, 3000));


  try {
    const { posts } = await getPosts("sort=latest&limit=5");
    return posts;
  } catch (error) {
    console.error("خطا", error);
    throw new Error(error?.resonse?.data?.message);
  }
}
