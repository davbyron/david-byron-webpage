import React, { useState, useEffect, SyntheticEvent } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

type imageType = {
  title: string
  date: number
  file: string
}

type slideshowPropType = {
  category: string
  images: imageType[]
}

function Slideshow(props: slideshowPropType) {
  const { category, images } = props;

  const [currentImageId, setCurrentImageId] = useState(0);

  useEffect(() => {
    // Set random image as current image
    setCurrentImageId(Math.floor(Math.random() * images.length))
  }, [])

  /**
   * 
   * @param event Move slide backward or forward
   */
  const changeSlides = (event: SyntheticEvent) => {
    const direction = event.currentTarget.id
    const numImages = images.length - 1

    // Set timeout to same time as svg transition in CSS.
    // Otherwise, component re-renders, causing an interruption
    // in the transition.
    setTimeout(() => {
      if (direction === "next") {
        if (currentImageId === numImages) {
          setCurrentImageId(0)
        } else {
          setCurrentImageId(currentImageId + 1)
        }
      }
  
      if (direction === "prev") {
        if (currentImageId === 0) {
          setCurrentImageId(numImages)
        } else {
          setCurrentImageId(currentImageId - 1)
        }
      }
    }, 100)
  }

  return (
    <div
      id="slideshow"
      className="flex items-center gap-5 text-sm md:text-base"
    >
      <button
        id="prev"
        onClick={changeSlides}
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
        <div className="w-full aspect-3/2 overflow-hidden">
          <img
            src={`/gallery/${category}/${images[currentImageId].file}`}
            alt={images[currentImageId].title}
            className="h-full w-full object-contain"
          />
        </div>
        <figcaption className="flex items-center justify-center">
          {images[currentImageId].title}, {images[currentImageId].date}
        </figcaption>
      </figure>

      <button
        id="next"
        onClick={changeSlides}
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

export default Slideshow
