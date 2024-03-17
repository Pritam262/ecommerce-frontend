'use client'

import { useAppContext } from "@/app/context/appContext"
import { useEffect, useState } from "react";
import Styles from '@/app/style/orderpage.module.css';
import Link from "next/link";
import { useRouter } from "next/navigation";

interface productItem {
    title: string,
    imageUrl: string,
    qty: string,
    price: string,
    totalPrice: string,
}

interface orderObject {
    id: string,
    user: string,
    mode: string,
    product: productItem,
    address: string,
    phone: string,
    transId: string,
    date: string,

}
interface OrderData {
    orderData: Array<orderObject>,
}


export default function orderPage() {

    const router = useRouter();

    const { hostUrl } = useAppContext();

    const [orderData, setOrderData] = useState<OrderData | null | undefined>();
    const fetchOrderData = async () => {
        const response = await fetch(`${hostUrl}/api/order`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();

        setOrderData(data);

        // console.log(data);
    }



    useEffect(() => {
        fetchOrderData();
    }, []);

    return (
        <div className={Styles.page}>

            <div className={Styles.orderComponent}>
                {orderData?.orderData.map(item => {
                    return (
                   
                        <div key={item?.id} className={Styles.card} onClick={()=> router.push(`/account/order/${item?.id}`)}>

                           
                                <img src={item?.product?.imageUrl} alt="" width={150} height={150} />
                                    <p>{item?.product?.title}</p>
                                <div>
                                    {/* <p>{item?.product?.qty}</p>
                                    <p>{item?.product?.price}</p>
                                    <p>{item?.product?.totalPrice}</p>
                                    <p >{item?.address}</p>
                                    <p>{item?.mode}</p>
                                <p>{item?.transId}</p> */}
                                </div>
                         
                        </div>
                              
                    )
                })}
            </div>
        </div>

    )
}