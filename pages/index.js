import styles from '../styles/Home.module.css'
import React from 'react'
import About from './components/About'
import Landing from './components/Landing'
import Skills from './components/Skills'
import Projects from './components/Projects'


export default function Home() {
  return (
    <html className='bg-custom_gray'>    
    <main className='text-gray-400 body-font ' className={styles.main}>
      <Landing />
      <About/>
      <Skills/>
      <Projects/>
    </main>
    </html>
  )
}
