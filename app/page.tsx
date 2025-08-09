'use client'

import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

import Image from 'next/image';

import Slideshow from '../components/Slideshow';

import myName from '../public/SVGs/my_name.svg' 
import developer from '../public/SVGs/developer.svg'
import visualArtist from '../public/SVGs/visual_artist.svg'

import imagesJson from '../public/gallery/images.json'

import styles from './page.module.css';

function HomePage() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  return (
    <>
      <div className={styles.onOpen}>
        <header>
          <div className="relative w-[75vh] overflow-hidden">
            <div className="flex items-center absolute size-1/2 top-1/4 left-1/4">
              <div className="relative w-full aspect-square rounded-full overflow-hidden">
                <Image
                  src="/myface.jpeg"
                  alt="My face"
                  fill
                  className="object-cover scale-175 -translate-x-1"
                  priority
                />
              </div>
            </div>
            {[...Array(8).keys()].map((num) => {
              const className = `myName${num + 1}`

              return (
                <Image
                  key={className}
                  src={myName}
                  className={`${styles.myName} ${styles[className]}`}
                  alt="David Byron"
                />
              )
            })}
            <Image src={developer} className={styles.developer} alt="Developer" />
            <Image src={visualArtist} className={styles.visualArtist} alt="Visual artist" />
          </div>
        </header>
        <div className="relative mx-auto z-10">
          <button
            type="button"
            id="scroll-button"
            onClick={handleScroll}
            className="group p-2 rounded-full transition-colors duration-500 ease cursor-pointer hover:bg-black/5 active:bg-black/10"
          >
            <FontAwesomeIcon icon={faChevronDown} size="2x" className="group-hover:animate-move-down" />
          </button>
        </div>
      </div>
      <div className={styles.onScroll}>
        <section className={styles.about} id="about" ref={aboutSectionRef}>
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
        <section className={styles.projects}>
          <h2>PROJECTS</h2>
          <h3>Web Development</h3>
          <p>
            <b>Unnamed Chess Battle Game (in development)</b> - Blog coming soon. For now, follow my progress on GitHub! (<a href="https://github.com/davbyron/chess-battle">repository</a>)
          </p>
          <p>
            <b>studynorthernpomo.com</b> - Learn Northern Pomo! (<a href="https://www.studynorthernpomo.com/">link</a>)
          </p>
          <p>
            <b>davidbyron.info</b> - Custom-built personal website for myself. (<a href="#">you are here</a>)
          </p>
          <p>
            <b>andreschwab.com</b> - Custom-built personal website for Andre Schwab. (<a href="https://www.andreschwab.com/">link</a>)
          </p>
          <h3>Academics</h3>
          <p>
            <b>Extraction from Conjuncts in Khoekhoe: An Argument for Cyclic Linearization</b> - In
            this thesis, I tackle a violation of the otherwise highly robust Coordinate Structure Constraint,
            so-called “SLF-coordination”, that has yet to be fully understood. I argue that the cyclic
            linearization approach to the locality of movement makes it possible to account for this
            puzzling phenomenon as it manifests in the Khoisan language Khoekhoe. (<a href="./public/thesis.pdf">link</a>)
          </p>
          <p>
            <b>Grammatical Sketch of |Xam</b> - A webpage outlining the syntactic properties of |Xam, a
            now extinct Khoisan language. (<a href="https://sites.google.com/site/thekhoisanlanguages/tuu/xam">link</a>)
          </p>
        </section>
        <section className={styles.gallery}>
          <h2>GALLERY</h2>
          <h3 className={styles.gallerySubheader}>Ceramics</h3>
          <Slideshow images={imagesJson["ceramics"]} category='ceramics' />
          <h3 className={styles.gallerySubheader}>Photography</h3>
          <Slideshow images={imagesJson["photography"]} category='photography' />
        </section>
      </div>
      <footer>
        <address>
          <a href="mailto:davbyron@icloud.com"><FontAwesomeIcon icon={faSquareEnvelope} className={styles.aboutLink} /></a>
          <a href="https://github.com/davbyron"><FontAwesomeIcon icon={faGithubSquare} className={`${styles.aboutLink} ${styles.aboutLinkSite}`} /></a>
          <a href="https://www.linkedin.com/in/david-byron-62a56b77/"><FontAwesomeIcon icon={faLinkedin} className={`${styles.aboutLink} ${styles.aboutLinkSite}`} /></a>
          <a href="https://www.instagram.com/bavdyron/"><FontAwesomeIcon icon={faInstagramSquare} className={`${styles.aboutLink} ${styles.aboutLinkSite}`} /></a>
        </address>
        <p>Copyright © 2023 David Byron</p>
      </footer>
    </>
  )
}

export default HomePage
