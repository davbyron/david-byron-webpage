'use client'

import React from 'react'
import Nav from '../../../components/Nav'
import Project from '../../../components/Project'

import { Badge } from '../../../components/Project'

import styles from './page.module.css'

function WebDevelopment() {
  return (
    <>
      <Nav activePath='/gallery/web-development' />
      <main>
        <section id="gallery">
          <h2>GALLERY</h2>
          <h3>WEB DEVELOPMENT</h3>
          <div className={styles.projectGallery}>
            <Project
              title='Unnamed Chess Battle Game (In Development)'
              description='Blog coming soon. For now, follow my progress on GitHub!'
              imgSrc='/thumbnails/chess-battle-site.png'
              projectLink='https://github.com/davbyron/chess-battle'
              badges={[Badge.HTML, Badge.CSS, Badge.TypeScript, Badge.MongoDB, Badge.Next]}
            />
            <Project
              title='studynorthernpomo.com'
              description='Learn Northern Pomo!'
              imgSrc='/thumbnails/npomo-site.png'
              projectLink='https://www.studynorthernpomo.com/'
              badges={[Badge.HTML, Badge.CSS, Badge.JavaScript]}
            />
            <Project
              title='davidbyron.info'
              description='Custom-built personal website for myself.'
              imgSrc='/thumbnails/my-site.png'
              projectLink='https://www.davidbyron.info/'
              badges={[Badge.HTML, Badge.CSS, Badge.TypeScript, Badge.Next]}
            />
            <Project
              title='andreschwab.com'
              description='Custom-built personal website for Andre Schwab.'
              imgSrc='/thumbnails/andres-site.png'
              projectLink='https://andreschwab.com/'
              badges={[Badge.HTML, Badge.CSS, Badge.JavaScript, Badge.React]}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default WebDevelopment
