import styles from '../styles/Home.module.css'
import React from 'react'
import Navbar from './components/Navbar'
import MainPage from './MainPage'


export default function Home() {
  return (
    <html className='bg-custom_gray w-screen'>    
    <main className='text-gray-400 body-font w-full' className={styles.main}>
      <Navbar/>
      <MainPage/>      
    </main>
    </html>
  )
}
