"use client";

import type { Database, SlideshowProps } from "@/types";
import { useState, useEffect  } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft, faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { PopupImage } from "@/components/PopupImage"; // avoiding circular dependency by importing directly from the file instead of index.ts

export function Slideshow(props: SlideshowProps) {
  const { images, imageUrlBase } = props;

  const [currentImage, setCurrentImage] = useState<Database["public"]["Tables"]["Gallery"]["Row"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (images && images.length > 0 && !currentImage) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }
  }, [images]);

  function changeSlides(_: React.MouseEvent<HTMLButtonElement>, direction: "next" | "prev") {
    setIsLoading(true);
    setCurrentImage((prevImage) => {
      if (!images || images.length === 0) {
        return null;
      }

      const currentIndex = prevImage ? images.findIndex((image) => image.id === prevImage.id) : -1;
      let newIndex: number;

      if (direction === "next") {
        newIndex = (currentIndex + 1) % images.length;
      } else {
        newIndex = (currentIndex - 1 + images.length) % images.length;
      }

      return images[newIndex];
    });
  }

  return (
    <div
      id="slideshow"
      className="flex items-center gap-5 text-sm md:text-base"
    >
      <button
        id="prev"
        onClick={(e) => changeSlides(e, "prev")}
        className="group flex items-center justify-center p-4 size-10 rounded-full
                  cursor-pointer transition-colors duration-500 ease-in-out
                  hover:bg-black/5 active:bg-black/10"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="sm"
          className="text-black relative left-0 transition-all duration-100
                      ease-linear group-hover:-left-1 group-active:left-0"
        />
      </button>

      <figure className="w-full flex flex-col gap-2">
        <div className="group relative w-full aspect-3/2 overflow-hidden">
          {isLoading && (
            <div className="h-full flex items-center justify-center">
              <FontAwesomeIcon icon={faCircleNotch} className="relative top-3.5 animate-spin text-3xl" />
            </div>
          )}
          {currentImage && (
            <>
              <PopupImage image={currentImage} imageUrlBase={imageUrlBase} />
              <img
                key={currentImage.id}
                src={`${imageUrlBase}${currentImage.filename}`}
                alt={currentImage.title}
                onLoad={() => setIsLoading(false)}
                className={`h-full w-full object-contain transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              />
            </>
          )}
        </div>
        <figcaption className="flex items-center justify-center">
          {currentImage?.title}, {currentImage?.year}
        </figcaption>
      </figure>

      <button
        id="next"
        onClick={(e) => changeSlides(e, "next")}
        className="group flex items-center justify-center p-4 size-10 rounded-full
                  cursor-pointer transition-colors duration-500 ease-in-out
                  hover:bg-black/5 active:bg-black/10"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="sm"
          className="text-black relative left-0 transition-all duration-100
                      ease-linear group-hover:left-1 group-active:left-0"
        />
      </button>
    </div>
  )
}
