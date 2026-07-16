"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="relative aspect-video w-full overflow-hidden bg-foreground/5">
        <Image
          src={images[activeIndex]}
          alt={`${alt} — image ${activeIndex + 1}`}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              className={`relative h-16 w-24 shrink-0 overflow-hidden bg-foreground/5 transition-opacity ${
                index === activeIndex ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
