'use client'

import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import styles from './Nav.module.css'

type NavProps = {
  activePath: string
}

function Nav(props) {
  const { activePath } = props

  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className={activePath === '/' ? 'active' : ''}>HOME</Link>
        </li>
        <li id={styles.galleryNav}>
          <Link href="/gallery" className={activePath.includes('/gallery') ? 'active' : ''}>
            GALLERY
            <FontAwesomeIcon icon={faChevronDown} size="xs" />
          </Link>
          <ul id={styles.galleryList}>
            <li>
              <Link href="/gallery/ceramics" className={activePath === '/gallery/ceramics' ? 'active' : ''}>
                CERAMICS
              </Link>
            </li>
            <li>
              <Link href="/gallery/photography" className={activePath === '/gallery/photography' ? 'active' : ''}>
                PHOTOGRAPHY
              </Link>
            </li>
            <li>
              <Link href="/gallery/web-development" className={activePath === '/gallery/web-development' ? 'active' : ''}>
                WEB DEVELOPMENT
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/shop" className={activePath === '/shop' ? 'active' : ''}>SHOP</Link>
        </li>
        <li>
          <Link href="/blog" className={activePath === '/blog' ? 'active' : ''}>BLOG</Link>
        </li>
        <li>
          <Link href="/about" className={activePath === '/about' ? 'active' : ''}>ABOUT</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
