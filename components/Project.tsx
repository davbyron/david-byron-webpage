'use client'

import React, { useCallback } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import MongoDBIcon from '../public/SVGs/MongoDB.svg'
import NextIcon from '../public/SVGs/nextjs-icon.svg'
import TSIcon from '../public/SVGs/ts-icon.svg'

import styles from './Project.module.css'

export enum Badge {
  HTML = 'html',
  CSS = 'css',
  JavaScript = 'javascript',
  TypeScript = 'typescript',
  React = 'react',
  Next = 'next',
  MongoDB = 'mongo'
}

type ProjectProps = {
  title: string
  description: string
  imgSrc: string
  projectLink: string
  badges: Badge[]
}

function Project(props: ProjectProps) {
  const {
    title,
    description,
    imgSrc,
    projectLink,
    badges
  } = props

  const handleProjectSelect = useCallback(() => {
    window.open(projectLink);
  }, [])

  return (
    <button type="button" className={styles.project} onClick={handleProjectSelect}>
      <img src={imgSrc} className={styles.thumbnailImage} alt={`Thumbnail image for ${title}`} />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className={styles.faIcons}>
        {(badges.includes(Badge.HTML) && <FontAwesomeIcon icon={faHtml5} size="xs" />)}
        {(badges.includes(Badge.CSS) && <FontAwesomeIcon icon={faCss3Alt} size="xs" />)}
        {(badges.includes(Badge.JavaScript) && <FontAwesomeIcon icon={faJs} size="xs" />)}
        {(badges.includes(Badge.TypeScript) && <Image src={TSIcon} alt="TypeScript icon" width={12} height={12} />)}
        {(badges.includes(Badge.React) && <FontAwesomeIcon icon={faReact} size="xs" />)}
        {(badges.includes(Badge.Next) && <Image src={NextIcon} alt="NextJS icon" width={12} height={12} />)}
        {(badges.includes(Badge.MongoDB) && <Image src={MongoDBIcon} alt="MongoDB icon" width={12} height={12} />)}
      </div>
    </button>
  )
}

export default Project
