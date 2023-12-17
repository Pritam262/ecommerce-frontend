import React from 'react'
import Navbar from './navbar'
import Styles from '@/app/style/home.module.css';
import Homeheader from './homeheader';
export default function Home() {
  return (
    <div className={Styles.container}>
      <Navbar/>
      <Homeheader/>
    </div>
  )
}

