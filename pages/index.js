import styles from '../styles/Home.module.css'
import React from 'react'
import Navbar from './components/Navbar'
import MainPage from './MainPage'


export default function Home() {
  return (
    <html className='bg-custom_gray'>    
    <main className='text-gray-400 body-font ' className={styles.main}>
      <Navbar/>
      <MainPage/>      
    </main>
    </html>
  )
}
