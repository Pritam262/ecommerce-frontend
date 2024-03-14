'use client'
import React, { ReactEventHandler, useEffect, useState } from "react";
import { useAppContext } from "@/app/context/appContext";
import Styles from '@/app/style/cartpage.module.css';
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

interface CartProducts {
    id: string;
    productId: string;
    title: string;
    imageUrl: string;
    qty: number;
    price: number;
    proTotalPrice: number;
}
interface CartData {
    products: Array<CartProducts>;
    totalPrice: string;
    totalLength: number;
    token:string;
}

export default function CartPage() {
    const {hostUrl, handleDeleteCartProduct } = useAppContext();

    const [cartData, setCartData] = useState<CartData | null | undefined>();
    // const token = `${localStorage.getItem('auth-token')}`;



    const getCartData = async () => {
        try {
            
            const response =await axios.get(`${hostUrl}/api/product/cartproduct`, {
                method: 'GET',
                withCredentials: true,
                
            });
            
            const data = await response.data;
            setCartData(data);

            
        } catch (error) {
            console.log(error)
        }
        }
        
    useEffect(() => {
        getCartData();
    }, [])



    return (

        <>
            {(cartData?.totalLength === 0) ? <div>No Item in cart</div> : <div className={Styles.page}>
                <div className={Styles.container}>


                    <div className={Styles.cartComponent}>
                        {cartData?.products.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    <div className={Styles.cart} >
                                        <Image src={item.imageUrl} width={150} height={200} alt=" " priority />
                                        <div className={Styles.details}>

                                            <div className={Styles.priceDiv}>
                                                <div>

                                                    <p>{item.title}</p>
                                                    <p>Qty: {item.qty}</p>
                                                </div>

                                                <div className={Styles.actionBtn}>
                                                    <button value={item.id} onClick={() => handleDeleteCartProduct(item.id)}>Delete</button>
                                                    <button value={item.id} >Move to save</button>
                                                </div>

                                            </div>

                                            <div className={Styles.rightPrice}>

                                                <p>₹ {item.price}</p>

                                                <div className={Styles.proTotalPrice}>
                                                    <p>Total Price: ₹ {item.proTotalPrice} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className={Styles.subTotalComp}>
                        <p>₹ {cartData?.totalPrice}</p>
                        <button><Link href={`/account/checkout?id=${cartData?.token}&type=cart`}>Procced to payment</Link></button>
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
            }
        </>
    )
}