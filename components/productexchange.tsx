"use client"
import Styles from "@/app/style/productpage.module.css";
import React, { useState } from "react";
import { BuyButton, CartButton } from "./Button";
export default function ExchangeComponent(props:any) {

    const [type, setType] = useState<string>("withoutexchange");
    return (
        <div className={Styles.exchangeContainer}>

            <div className={`${Styles.exchageOptionContainer} ${(type === "exchange") ? "" : `${Styles.notActive}`}`}>

                <span><input type="radio" className={Styles.radioBtn} name="type" value="exchange" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value)} /> With Exchnage</span>

                {(type === "exchange") ? <div>
                    <div className={Styles.chooseBtn}>Chose phone to exchage</div>
                </div> : ""}
            </div>
            <div className={`${Styles.exchageOptionContainer} ${(type === "withoutexchange") ? "" : `${Styles.notActive}`}`}>

                <span><input type="radio" className={Styles.radioBtn} name="type" value="withoutexchange" defaultChecked onChange={(e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value)} /> Without Exchange</span>

                <p>₹ {props?.price}</p>
                {(type === "withoutexchange") ? <div>
                    <p>Without Exchnage</p>
                    <div className={Styles.option}>
                            <CartButton id={String(props.id)} title={props.title} />
                            <BuyButton id={props.id} type="single"/>

                        </div>
                </div> : ""}
            </div>
        </div>

    )
}