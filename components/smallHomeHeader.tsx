'use client'
import React, { useEffect, useState } from "react";
import Styles from "@/app/style/smallhomeheader.module.css";
import Image from "next/image";
export default function SmallHomeHeader() {
    const add = [
        {
            imageUrl: "/71KGEZmwV0L._SL1500__AC_SY440_.jpg",
            smallImageUrl: "/71KGEZmwV0L._SL1500__AC_SY172_.jpg",
            addText: "$499 and under",
            desc: "Deals on Re'Equil",
        },
        {
            imageUrl: "/41jM-+2+oOS._AC_SY440_.jpg",
            smallImageUrl: "/41jM-+2+oOS._AC_SY172_.jpg",
            addText: "$479 and under",
            desc: "Best Details on Analouge watches",
        },
        {
            imageUrl: "/41NWuHX3WBL._AC_SY440_.jpg",
            smallImageUrl: "/41NWuHX3WBL._AC_SY172_.jpg",
            addText: "$499 and under",
            desc: "Best offers on Ustraa Men's Care Products",
        },
        {
            imageUrl: "/31ylQzip4ML._AC_SY172_.jpg",
            smallImageUrl: "/31ylQzip4ML._AC_SY172_.jpg",
            addText: "$499 and under",
            desc: "Best Details on Acns watches",
        }
    ];

    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex(prevIndex => (prevIndex + 1) % add.length)
        }, 3000);
        return ()=> clearInterval(interval);
    }, [])

    return (
        <>
            <div className={Styles.header}>
                <Image src='/MA_3000._CB571190800_.jpg' width={1920} height={1080} alt='' priority className={Styles.headerImage} />
            </div>
            <Image src='/41P-ARf+EcL._SR1245,150_.jpg' width={600} height={150} alt='' priority className={Styles.banner} />
            <div className={Styles.addContainer}>
                <p>Starting $199 | Delas on fashion, beauty, Kitchen & more</p>

                <Image src={add[activeImageIndex]?.imageUrl} width={200} height={300} alt="" priority className={Styles.addImage} />
                <p><span className={Styles.highlightText}>$499 and under</span> Limited time deal</p>
                <p>{add[activeImageIndex]?.desc}</p>

                <div className={Styles.addFlexContainer}>
                    {add && add.map((item, index) => {
                        return (
                            <Image src={item.smallImageUrl} className={activeImageIndex=== index? Styles.activeAdd :""} width={50} height={50} alt="" priority id={index.toString()} key={index} onClick={(e:React.MouseEvent<HTMLImageElement>)=> setActiveImageIndex(Number(e.currentTarget.getAttribute('id')))}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}