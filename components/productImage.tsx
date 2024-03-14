"use client"

import Styles from "@/app/style/productcomponent.module.css";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductImage(props: any) {
    // console.log("Props", props)
    const [image, setImage] = useState<string>(`${props.images[0].imageUrl}`);
    // console.log("Images", images);



    return (
        <div className={Styles.container}>

            <div className={Styles.navigateImageContainer}>
                {props.images && props.images.map((item: any) => {
                    return (
                        <Image src={`${item?.imageUrl}`} alt="" width={600} height={600} className={Styles.navImage} key={item?.id} loading="lazy" onClick={(e:React.MouseEvent<HTMLImageElement>)=> setImage((e.currentTarget as HTMLImageElement).src)}  onMouseOver={(e:React.MouseEvent<HTMLImageElement>)=> setImage((e.currentTarget as HTMLImageElement).src)}/>
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