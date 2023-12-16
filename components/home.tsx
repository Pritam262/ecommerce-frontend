import React from 'react'
import Navbar from './navbar'
import Styles from '@/app/style/home.module.css';
export default function Home() {
  return (
    <div className={Styles.container}>
      <Navbar/>
    </div>
  )
}

