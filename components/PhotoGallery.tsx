'use client'

import React, { KeyboardEvent, MouseEvent, useCallback, useState } from 'react'
import Slideshow from './Slideshow'

import imagesJson from '../public/gallery/images.json'

import styles from './PhotoGallery.module.css'

type imageType = {
  title: string
  date: number
  file: string
}

type galleryPropsType = {
  category: string
}

function PhotoGallery(props: galleryPropsType) {
  const { category } = props
  
  const [selectedImage, setSelectedImage] = useState<imageType|null>(null)

  const images = imagesJson[category]

  const handleSelect = useCallback((image: imageType) => {
    setSelectedImage(image)
  }, [])

  const handleImageClick = useCallback((event: MouseEvent<HTMLImageElement>) => {
    const imageTitle = event.currentTarget.alt
    const image = images.find((img: imageType) => img.title === imageTitle)
    handleSelect(image)
  }, [selectedImage])

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLImageElement>) => {
    const keyPressed = event.key

    if (keyPressed == 'Enter') {
      const imageTitle = event.currentTarget.alt
      const image = images.find((img: imageType) => img.title === imageTitle)
      handleSelect(image)
    }
  }, [])

  const handleSlideshowClose = useCallback(() => {
    setSelectedImage(null)
  }, [])

  return (
    <div className={styles.galleryWrapper}>
      {selectedImage && (
        <Slideshow
          category={category}
          images={images}
          startingImage={selectedImage}
          closeSlideshow={handleSlideshowClose}
        />
      )}
      {!selectedImage && images.map((img: imageType) => (
        <img
          src={`/gallery/${category}/${img.file}`}
          alt={img.title}
          className={styles.galleryImg}
          onClick={handleImageClick}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          key={img.title}
        />
      ))}
    </div>
  )
}

export default PhotoGallery
