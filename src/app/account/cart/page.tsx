'use client'

import { useAppContext } from "@/app/context/appContext";
import Styles from '@/app/style/cartpage.module.css';
import Image from "next/image";
export default function CartPage() {
    const { cartData } = useAppContext();
    return (

        <div className={Styles.page}>
            <div className={Styles.container}>


                <div className={Styles.cartComponent}>
                    {cartData?.products.map((item, index) => {
                        return (
                            <div className={Styles.cart} key={item.id}>
                                <Image src={item.imageUrl} width={150} height={200} alt=" " priority />
                                <div className={Styles.details}>

                                    <div className={Styles.priceDiv}>
                                        <p>{item.title}</p>
                                        <p>Qty: {item.qty}</p>
                                    </div>
                                    <p>₹ {item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={Styles.subTotalComp}>
                    <p>₹ {cartData?.totalPrice}</p>
                    <button>Procced to payment</button>
                </div>

                <div className={Styles.likeCartComp}>
                    <p>Pair with your cart</p>
                </div>

                <div className={Styles.saveComp}>
                    <p>Save comp</p>
                </div>

            </div>
            {/* Container page end */}

            <div className={Styles.recomentComp}>
                <h4>Recomendations for all products: </h4>
            </div>


        </div>
    )
}