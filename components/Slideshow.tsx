import React, { useState, useEffect, SyntheticEvent } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './Slideshow.module.css'

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
  }

  return (
    <div className="slideshow-container">
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
      </div>
      <div id="picDescription"></div>
    </div>
  )
}

export default Slideshow
