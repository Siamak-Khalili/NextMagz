"use client";

import { Suspense, useEffect, useState } from "react";
import Fallback from "@/ui/Fallback";
import UsersTable from "@/components/dashboard/users/UsersTable";
import http from "@/services/httpService";

function Page() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await http.get("/user/list");
        setUsers(response.data.data.users || []);
      } catch (err) {
        setError("خطا در بارگذاری کاربران");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) return <Fallback />;

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-secondary-700 font-bold text-xl">مدیریت کاربران</h1>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <Suspense fallback={<Fallback />}>
        <UsersTable users={users} />
      </Suspense>
    </div>
  );
}

export default Page;
