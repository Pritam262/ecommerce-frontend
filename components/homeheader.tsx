"use client"
import React, {useEffect, useState} from 'react'
import Styles from '@/app/style/homeheader.module.css';
import Homeother from './homeother';
import Image from 'next/image';
import SmallHomeHeader from './smallHomeHeader';
export default function Homeheader() {

  const [screenWidth, setScreenWidth]= useState<number>(1200);

  useEffect(()=>{
    setScreenWidth(window.innerWidth);
  },[])

  return (
<>
 { screenWidth && screenWidth>600? <><div className={Styles.header}>
      <Image src='/MA_3000._CB571190800_.jpg' width={1920} height={1080} alt='' priority className={Styles.headerImage} />
      <div className={Styles.headerOverlay}></div>

      <Homeother />
    </div> </> :<SmallHomeHeader/> }
</>
  )
}
