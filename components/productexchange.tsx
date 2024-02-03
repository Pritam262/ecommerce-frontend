"use client"
import Styles from "@/app/style/productpage.module.css";
import React, { useState } from "react";
export default function ExchangeComponent(price: any) {

    const [type, setType] = useState<string>("withoutexchange");

    return (
        <div className={Styles.exchangeContainer}>

            <div className={`${Styles.exchageOptionContainer} ${(type === "exchange") ? "" : `${Styles.notActive}`}`}>

                <span><input type="radio" name="type" value="exchange" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value)} /> With Exchnage</span>

                {(type === "exchange") ? <div>
                    <div className={Styles.btn}>Chose phone to exchage</div>
                </div> : ""}
            </div>
            <div className={`${Styles.exchageOptionContainer} ${(type === "withoutexchange") ? "" : `${Styles.notActive}`}`}>

                <span><input type="radio" name="type" value="withoutexchange" defaultChecked onChange={(e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value)} /> Without Exchange</span>

                <p>{price.price}</p>
                {(type === "withoutexchange") ? <div>
                    <p>Without Exchnage</p>
                </div> : ""}
            </div>
        </div>

    )
}