import styles from '../styles/Home.module.css'
import React from 'react'
import About from './components/About'
import Landing from './components/Landing'


export default function Home() {
  return (
    <html className='bg-custom_gray'>    
    <main className='text-gray-400 body-font ' className={styles.main}>
      <Landing />
      <About/>
    </main>
    </html>
  )
}
