import React from 'react'

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
  
  const images = imagesJson[category]

  return (
    <div className={styles.galleryWrapper}>
      {images.map((img: imageType) => (
        <img src={`/gallery/${category}/${img.file}`} alt={img.title} />
      ))}
    </div>
  )
}

export default PhotoGallery
