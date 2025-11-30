import { getCategories } from "@/services/postService";
import Link from "next/link";

async function CateogryList() {
  const categories = await getCategories();
  return (
    <ul className="space-y-4 ">
      <Link className="font-medium hover:text-primary-600" href={`/blogs/`}>
        همه
      </Link>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link
              className="font-medium hover:text-primary-600"
              href={`/blogs/category/${category.slug}`}
            >
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default CateogryList;
