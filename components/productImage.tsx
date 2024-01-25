"use client"

import Styles from "@/app/style/productcomponent.module.css";
import React, { useEffect, useState } from "react";

export default function ProductImage(props: any) {
    // console.log("Props", props)
    const [image, setImage] = useState<string>();
    // console.log("Images", images);

    useEffect(()=>{
        setImage(props.images[0].imageUrl);
    },[])

    return (
        <div className={Styles.container}>

            <div className={Styles.navigateImageContainer}>
                {props.images && props.images.map((item: any) => {
                    return (
                        <img src={`http://127.0.0.1:3000/${item?.path}`} alt="" className={Styles.navImage} key={item?.id} onClick={(e)=> setImage(e.target.src)} onMouseOver={(e)=> setImage(e.target.src)}/>
                    )
                })}

            </div>

            <div className={Styles.imageContainer}>


            <div className={Styles.imageTopSpace}></div>

            <img src={image} className={Styles.image} alt="" loading="lazy" />
            </div>


      


        </div>
    )
}