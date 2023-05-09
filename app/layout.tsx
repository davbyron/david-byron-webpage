import type { Metadata } from 'next';

import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

import './global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import styles from './page.module.css'

config.autoAddCss = false

export const metadata: Metadata = {
  title: 'David Byron',
  description: 'Personal webpage for David Byron'
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dosis&family=Roboto:ital,wght@0,300;0,400;1,300;1,400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <footer>
          <address>
            <a href="mailto:davbyron@icloud.com"><FontAwesomeIcon icon={faSquareEnvelope} className={styles.aboutLink} /></a>
            <a href="https://github.com/davbyron"><FontAwesomeIcon icon={faGithubSquare} className={`${styles.aboutLink} ${styles.aboutLinkSite}`} /></a>
            <a href="https://www.linkedin.com/in/david-byron-62a56b77/"><FontAwesomeIcon icon={faLinkedin} className={`${styles.aboutLink} ${styles.aboutLinkSite}`} /></a>
            <a href="https://www.instagram.com/bavdyron/"><FontAwesomeIcon icon={faInstagramSquare} className={`${styles.aboutLink} ${styles.aboutLinkSite}`} /></a>
          </address>
          <p>Copyright © 2023 David Byron</p>
      </footer>
      </body>
    </html>
  );
}
