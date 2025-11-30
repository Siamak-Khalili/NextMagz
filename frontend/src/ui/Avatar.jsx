"use client";
import Image from "next/image";
import { useState } from "react";

const DEFAULT_AVATAR = "/avatar/avatar.png";

const DEFAULT_CLASSES = "rounded-full ring-1 ring-secondary-300 object-cover";

export default function Avatar({
  src,
  alt = "User Avatar",
  width = 40,
  height = 40,
  className = "",
}) {
  const [imgSrc, setImgSrc] = useState(
    src && src.trim() !== "" ? src : DEFAULT_AVATAR
  );

  const handleError = () => {
    setImgSrc(DEFAULT_AVATAR);
  };

  const combinedClasses = `${DEFAULT_CLASSES} ${className}`.trim();

  return (
    <Image
      src={imgSrc}
      width={width}
      height={height}
      alt={alt}
      className={combinedClasses}
      onError={handleError}
    />
  );
}
