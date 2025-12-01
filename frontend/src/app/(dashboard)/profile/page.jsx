import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import LatestPosts from "../../../components/dashboard/LatestPosts";
import CardWrapper from "../../../components/dashboard/CardWrapper";

export const dynamic = "force-dynamic";

async function Profile() {
  return (
    <div>
      <h2 className="text-xl mb-8 text-secondary-500">داشبورد</h2>
      <Suspense fallback={<Fallback />}>
        <CardWrapper />
      </Suspense>
      <div>
        <Suspense fallback={<Fallback />}>
          <LatestPosts />
        </Suspense>
      </div>
    </div>
  );
}

export default Profile;
