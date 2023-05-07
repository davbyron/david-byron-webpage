import React from 'react'
import Nav from '../../../components/Nav'
import PhotoGallery from '../../../components/PhotoGallery'

function Photography() {
  return (
    <>
      <Nav activePath='/gallery/photography' />
      <main>
        <section id="gallery">
          <h2>GALLERY</h2>
          <h3>PHOTOGRAPHY</h3>
          <PhotoGallery category='photography' />
        </section>
      </main>
    </>
  )
}

export default Photography
