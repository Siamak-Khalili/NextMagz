import PostsTable from "./posts/PostsTable";

async function LatestPosts() {
  const query = "sort=latest&limit=5";
  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl  text-neutral-900 dark:text-white">
          آخرین پست ها
        </h2>
      </div>

      <PostsTable query={query} />
    </div>
  );
}
export default LatestPosts;
