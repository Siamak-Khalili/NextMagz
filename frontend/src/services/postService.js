import http from "./httpService";

export async function getPostBySlug(postSlug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${postSlug}`,
    { cache: "force-cache" }
  );

  const data = await res.json();
  const post = data?.data?.post || data?.post;

  return post;
}

export async function getPostById(id) {
  return http.get(`/post/${id}`).then(({ data }) => data);
}

export async function getPosts(queries, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/list?${queries}`,
    options
  );
  const { data } = await res.json();
  const { posts, totalPages } = data || {};

  return { posts, totalPages };
}

export async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`, {
    cache: "force-cache",
  });
  const { data } = await res.json();
  const { categories } = data || {};

  return categories;
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function createPostApi(data) {
  return http.post(`/post/create`, data).then(({ data }) => data.data);
}

export async function editPostApi({ id, data }) {
  return http.patch(`/post/update/${id}`, data).then(({ data }) => data.data);
}

export async function deletePostApi(id, options) {
  return http
    .delete(`/post/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function getAllTags() {
  try {
    const { posts } = await getPosts("", {
      next: { revalidate: 3600 },
    });

    const tagMap = {};

    posts?.forEach((post) => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach((tag) => {
          const normalizedTag = tag.trim();
          if (normalizedTag) {
            tagMap[normalizedTag] = (tagMap[normalizedTag] || 0) + 1;
          }
        });
      }
    });

    const tags = Object.entries(tagMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    console.log("تگ‌های استخراج شده:", tags);
    return tags;
  } catch (error) {
    console.error("خطا در گرفتن تگ‌ها:", error);
    return [];
  }
}

// { cache: "force-cache" }
