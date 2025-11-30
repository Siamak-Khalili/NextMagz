import CoverImage from "../CoverImage";

function RelatedPost({ posts }) {
  return (
    <aside className="lg:col-span-3">
      <div className="sticky top-24 space-y-6">
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
            مقالات مرتبط
          </h3>
          <div className="space-y-4">
            {posts.map((item) => {
              return (
                <div key={item._id} className="group block">
                  <div className="aspect-video rounded-lg overflow-hidden mb-2">
                    <CoverImage
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      {...item}
                    />
                  </div>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    {item.readingTime}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
export default RelatedPost;
