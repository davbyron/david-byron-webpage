import React from 'react'
import Nav from '../../../components/Nav'
import PhotoGallery from '../../../components/PhotoGallery'

function Ceramics() {
  return (
    <>
      <Nav activePath='/gallery/ceramics' />
      <main>
        <section id="gallery">
          <h2>GALLERY</h2>
          <h3>CERAMICS</h3>
          <PhotoGallery category='ceramics' />
        </section>
      </main>
    </>
  )
}

export default Ceramics
