"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SmartImage({
  src,
  fallbackSrc,
  alt,
  className,
  ...props
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
      unoptimized
      {...props}
    />
  );
}
