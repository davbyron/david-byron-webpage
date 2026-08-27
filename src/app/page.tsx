import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

import { About, Gallery, Projects, ScrollButton } from "@/components";

import styles from "./page.module.css";

export default function HomePage() {
  const year = new Date().getFullYear();

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
                  src="SVGs/my_name.svg"
                  height={1}
                  width={1}
                  className={`${styles.myName} ${styles[className]}`}
                  alt="David Byron"
                />
              )
            })}
            <Image src="SVGs/developer.svg" height={1} width={1} className={styles.developer} alt="Developer" />
            <Image src="SVGs/visual_artist.svg" height={1} width={1} className={styles.visualArtist} alt="Visual artist" />
          </div>
        </header>
        <div className="relative mx-auto mb-24 sm:mb-0">
          <ScrollButton />
        </div>
      </div>

      <div className="w-3/4 max-w-[80ch] mx-auto">
        <main className="pt-18 flex flex-col gap-20 text-justify">
          <About />
          <Projects />
          <Gallery />
        </main>

        <footer className="mt-36 p-8 flex flex-col gap-4 items-center border-t">
          <address className="flex gap-3">
            <Link className="text-orange" href="mailto:davbyron@icloud.com" aria-label="Email David Byron">
              <FontAwesomeIcon icon={faSquareEnvelope} className="text-5xl" />
            </Link>
            <Link className="text-orange" href="https://github.com/davbyron" aria-label="Link to David Byron's GitHub profile">
              <FontAwesomeIcon icon={faGithubSquare} className="text-5xl" />
            </Link>
            <Link className="text-orange" href="https://www.linkedin.com/in/david-byron-62a56b77/" aria-label="Link to David Byron's LinkedIn profile">
              <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
            </Link>
            <Link className="text-orange" href="https://www.instagram.com/bavdyron/" aria-label="Link to David Byron's Instagram profile">
              <FontAwesomeIcon icon={faInstagramSquare} className="text-5xl" />
            </Link>
          </address>
          <p className="text-xs">Copyright &copy; {year} David Byron</p>
        </footer>
      </div>
    </div>
  )
}
