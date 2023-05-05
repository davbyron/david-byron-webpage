import React from 'react'
import Image from 'next/image'

import Nav from '../../components/Nav'

import myName from '../../public/SVGs/my_name.svg' 
import developer from '../../public/SVGs/developer.svg'
import visualArtist from '../../public/SVGs/visual_artist.svg'

import styles from './page.module.css'

function About() {
  return (
    <>
      <Nav activePath='/about' />
      <main id={styles.aboutMain}>
        <section id={styles.about}>
          <h2>ABOUT</h2>
          <p>Nice to meet you on the web! I'm David, an Artist and Developer.</p>

          <p>In my most recent position as a Software Engineer at <a href="https://www.lymba.com/">Lymba</a>, I worked primarily on developing web apps integrated
          with NLP tools and knowledge graphs. My day-to-day really varied, but I was often responsible for UI/UX design, building
          and maintaining customer-facing applications, ontology building, creating NLP resources, maintaining RESTful Python APIs,
          client demos, documentation writing, and quality assurance testing.</p>

          <p>Recently, I've found myself trying to mesh my more recent aptitude for computer science with my
          lifelong love for art. As a result, I have been increasingly drawn towards web development and UI/UX design,
          relishing in the challenge of crafting webpages that are not only aesthetically pleasing,
          but also highly functional and intuitive. Constructing a product end-to-end has proven a rewarding
          experience and I'm looking to do more of that in the future.</p>

          <p>Throughout my education, I focused primarily on syntactic phenomena in hopes of
          finding the answers to the following questions: (i) what are the fundamental syntactic
          operations provided by the human language faculty?; and (ii) what constraints are they
          subject to, and why? This work culminated in my Master's thesis <cite><a href="./thesis.pdf">Extraction from Conjuncts
          in Khoekhoe: An Argument for Cyclic Linearization</a></cite> advised by Erik Zyman
          at the University of Chicago</p>

          <p>Outside of work, I spend a lot of time cycling, gardening, playing video games, making art of all kinds, and at drag events.</p>
        </section>
        <div className={styles.revolvingText}>
          <div className={styles.face}>
            <div className={styles.faceContainer}></div>
          </div>
          {[...Array(8).keys()].map((num) => {
            const className = `myName${num + 1}`

            return <Image src={myName} className={`${styles.myName} ${styles[className]}`} alt="David Byron" />
          })}
          <Image src={developer} className={styles.developer} alt="Developer" />
          <Image src={visualArtist} className={styles.visualArtist} alt="Visual artist" />
        </div>
      </main>
    </>
  )
}

export default About
