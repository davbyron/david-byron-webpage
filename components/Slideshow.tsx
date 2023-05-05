import React, { useState, useEffect, SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons'

import styles from './Slideshow.module.css'

type imageType = {
  title: string
  date: number
  file: string
}

type slideshowPropType = {
  category: string
  images: imageType[]
  startingImage: imageType
  closeSlideshow?: () => void
}

function Slideshow(props: slideshowPropType) {
  const { category, images, startingImage, closeSlideshow } = props;

  const [currentImageId, setCurrentImageId] = useState(0);

  useEffect(() => {
    const startingImageId = images.indexOf(startingImage)
    setCurrentImageId(startingImageId)
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
      if (direction === 'next') {
        if (currentImageId === numImages) {
          setCurrentImageId(0)
        } else {
          setCurrentImageId(currentImageId + 1)
        }
      }
  
      if (direction === 'prev') {
        if (currentImageId === 0) {
          setCurrentImageId(numImages)
        } else {
          setCurrentImageId(currentImageId - 1)
        }
      }
    }, 100)
  }

  return (
    <div className={styles.slideshow} id="slideshow">
      <button className={styles.prev} id="prev" onClick={changeSlides}>
        <FontAwesomeIcon icon={faChevronLeft} size="sm" className={styles.slideshowNav} />
      </button>
      <figure className={styles.slideContainer}>
        <div className={styles.slide}>
          <img
            src={`/gallery/${category}/${images[currentImageId].file}`}
            alt={images[currentImageId].title}
            className={styles.slideshowImg}
          />
        </div>
        <figcaption className={styles.slideText}>
          {images[currentImageId].title}, {images[currentImageId].date}
        </figcaption>
      </figure>
      <button className={styles.next} id="next" onClick={changeSlides}>
        <FontAwesomeIcon icon={faChevronRight} size="sm" className={styles.slideshowNav} />
      </button>
      <button className={styles.closeButton}>
        <FontAwesomeIcon icon={faXmark} size="sm" onClick={closeSlideshow} />
      </button>
    </div>
  )
}

export default Slideshow
