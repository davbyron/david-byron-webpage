"use client"

import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

import Image from "next/image";

import Slideshow from "../components/Slideshow";

import myName from "../public/SVGs/my_name.svg" 
import developer from "../public/SVGs/developer.svg"
import visualArtist from "../public/SVGs/visual_artist.svg"

import imagesJson from "../public/gallery/images.json"

import styles from "./page.module.css";

export default function HomePage() {
  const year = new Date().getFullYear();

  const aboutSectionRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="h-[90vh] mt-10 mx-5 sm:mx-8 flex flex-col justify-between text-base">
        <header className="h-[75vh] flex justify-center">
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
        <div className="relative mx-auto mb-20 sm:mb-0">
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
      <div className="w-3/4 max-w-[80ch] pt-18 mx-auto flex flex-col gap-20 text-justify" ref={aboutSectionRef}>
        <section className="flex flex-col gap-5" id="about">
          <h2 className="font-archivo-black text-5xl text-black">ABOUT</h2>
          <p>Nice to meet you on the web! I'm David, an Artist and Developer.</p>

          <p>By day I am an Application Developer at <a className="text-orange underline" href="https://www.rutgers.edu/">Rutgers University</a> where I support the Division of Continuing Studies
          by creating and maintaining bespoke web applications ranging from HR hiring systems to department sign-in systems and reporting.</p>

          <p>Before Rutgers, I worked as a Software Engineer at <a className="text-orange underline" href="https://www.lymba.com/">Lymba</a> where I primarily developed web apps integrated
          with NLP tools and knowledge graphs. My day-to-day really varied, but I was often responsible for UI/UX design, building
          and maintaining customer-facing applications, ontology building, creating NLP resources, maintaining RESTful Python APIs,
          client demos, documentation writing, and quality assurance testing.</p>

          <p>In a past life I was an avid linguist focusing primarily on syntactic phenomena in hopes of
          finding the answers to the following questions: (i) what are the fundamental syntactic
          operations provided by the human language faculty?; and (ii) what constraints are they
          subject to, and why? This work culminated in my Master's thesis <cite><a className="text-orange underline" href="./thesis.pdf">Extraction from Conjuncts
          in Khoekhoe: An Argument for Cyclic Linearization</a></cite> advised by Erik Zyman
          at the University of Chicago.</p>

          <p>Outside of work, I spend a lot of time cycling, gardening, playing video games, making art of all kinds, and at drag events.</p>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="font-archivo-black text-5xl text-black">PRO<wbr />JECTS</h2>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-orange uppercase font-dosis text-2xl">Web Development</h3>
            <p className="flex flex-col gap-1 sm:block">
              <span className="font-bold">studynorthernpomo.com</span>
              <span className="hidden sm:inline-block">&nbsp;-&nbsp;</span>
              <span>Learn Northern Pomo! (<a className="text-orange underline" href="https://www.studynorthernpomo.com/">link</a>)</span>
            </p>
            <p className="flex flex-col gap-1 sm:block">
              <span className="font-bold">davidbyron.info</span>
              <span className="hidden sm:inline-block">&nbsp;-&nbsp;</span>
              <span>Custom-built personal website for myself. (<a className="text-orange underline" href="#">you are here</a>)</span>
            </p>
            <p className="flex flex-col gap-1 sm:block">
              <span className="font-bold">andreschwab.com</span>
              <span className="hidden sm:inline-block">&nbsp;-&nbsp;</span>
              <span>Custom-built personal website for Andre Schwab. (<a className="text-orange underline" href="https://www.andreschwab.com/">link</a>)</span>
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="text-orange uppercase font-dosis text-2xl">Academics</h3>
            <p className="flex flex-col gap-1 sm:block">
              <span className="font-bold">Extraction from Conjuncts in Khoekhoe: An Argument for Cyclic Linearization</span>
              <span className="hidden sm:inline-block">&nbsp;-&nbsp;</span>
              <span>
                In this thesis, I tackle a violation of the otherwise highly robust Coordinate Structure Constraint,
                so-called “SLF-coordination”, that has yet to be fully understood. I argue that the cyclic
                linearization approach to the locality of movement makes it possible to account for this
                puzzling phenomenon as it manifests in the Khoisan language Khoekhoe. (<a className="text-orange underline" href="/thesis.pdf">link</a>)
              </span>
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h2 className="font-archivo-black text-5xl text-black">GALLERY</h2>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-orange uppercase font-dosis text-2xl">Ceramics</h3>
              <Slideshow images={imagesJson["ceramics"]} category="ceramics" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-orange uppercase font-dosis text-2xl">Photography</h3>
              <Slideshow images={imagesJson["photography"]} category="photography" />
            </div>
          </div>
        </section>
      </div>
      <footer className="mx-auto mt-36 p-8 w-3/4 max-w-[80ch] flex flex-col gap-4 items-center border-t">
        <address className="flex gap-3">
          <a className="text-orange" href="mailto:davbyron@icloud.com"><FontAwesomeIcon icon={faSquareEnvelope} className="text-5xl" /></a>
          <a className="text-orange" href="https://github.com/davbyron"><FontAwesomeIcon icon={faGithubSquare} className="text-5xl" /></a>
          <a className="text-orange" href="https://www.linkedin.com/in/david-byron-62a56b77/"><FontAwesomeIcon icon={faLinkedin} className="text-5xl" /></a>
          <a className="text-orange" href="https://www.instagram.com/bavdyron/"><FontAwesomeIcon icon={faInstagramSquare} className="text-5xl" /></a>
        </address>
        <p className="text-xs">Copyright &copy; {year} David Byron</p>
      </footer>
    </div>
  )
}
