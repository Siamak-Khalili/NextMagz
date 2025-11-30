import Image from "next/image";
import Link from "next/link";

function CoverImage({ title, coverImageUrl, slug, className }) {
  return (
    <div className=" relative  h-[300px]">
      <Link
        href={`/blogs/${slug}`}
        className="block relative w-full  h-[300px]"
      >
        <Image
          src={coverImageUrl}
          alt={title || "Post cover"}
          fill
          loading="eager"
          className={`object-cover rounded-md ${className || ""}`}
        />
      </Link>
    </div>
  );
}

export default CoverImage;
