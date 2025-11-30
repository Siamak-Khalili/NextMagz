"use client";

import { Suspense, useEffect, useState } from "react";
import Fallback from "@/ui/Fallback";
import { getAllCommentsApi } from "@/services/commentService";
import CommentsTable from "@/components/dashboard/comments/CommentsTable";

function Page() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCommentsApi();
        setComments(data.comments || []);
      } catch (err) {
        setError("خطا در بارگذاری نظرات");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (isLoading) return <Fallback />;

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-secondary-700 font-bold text-xl">مدیریت نظرات</h1>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <Suspense fallback={<Fallback />}>
        <CommentsTable comments={comments} />
      </Suspense>
    </div>
  );
}

export default Page;
