import axios from "axios"

import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Styles from "@/app/style/ordercomponent.module.css";

interface ProductData {
    id: string;
    title: string;
    imageUrl: string;
}
interface OrderItem {
    id: string;
    user: string;
    transId: string;
    mode: string;
    product: ProductData;
    qty: number;
    price: number;
    address: string;
    phone: string;
    date: string;

}

interface OrderData {
    order: OrderItem;
}

export default async function orderProduct({ params }: { params: { slug: string } }) {


    const token = cookies().get('authtoken')?.value;

    const response = await fetch(`${process.env.SERVER_IP}/api/order/product?proId=${params.slug}`, {
        method: 'GET', credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'authtoken': String(token),
        }
    });

    const data: OrderData = await response.json();


    return (
        // <Link href={`/product?q=${data.order.product.title}&id=${data.order.product.id}`}>
        <div className={Styles.page}>
            <span className={Styles.navigation}><Link href={`/account`} className={Styles.link}>Your account </Link> <p> {">"}</p> <Link href={`/account/order`} className={Styles.link}>Your Orders</Link> <p> {">"}</p>  <p>{data.order.product.title.substring(0,25)}.....</p></span>
            <div className={Styles.component}>
                <div className={Styles.product}>
                    <Image src={data.order.product.imageUrl} width={150} height={150} alt="" priority />
                    <div className={Styles.details}>
                        <p className={Styles.title}>{data.order.product.title}</p>
                        <Link href={`/product?q=${data.order.product.title}&id=${data.order.product.id}`}><p className={Styles.link}>View product details</p></Link>
                    </div>
                </div>
                <div className={Styles.buyComponent}>
                    <div>
                        <p>Buy it again</p>
                    </div>
                </div>

                <div className={Styles.delivery}>
                    <div className={Styles.check}></div>
                    <div>
                        <p>Deliverd 6 March</p>
                        <p>Package was handed to resident</p>
                    </div>

                    <div><p>Track package</p></div>
                </div>

                <div className={Styles.orderInfo}>
                    <p>Order info</p>
                    <p>View order details</p>

                    <hr />
                    <p>Return window closed on 16 March 2024</p>
                    <p>Order on 1 March 2024</p>
                </div>

                <div className={Styles.opinion}>
                    <h2>How's your item?</h2>
                    <p>Write a product review</p>
                    <p>Leave seller feadback</p>
                </div>
            </div>
        </div>
        // </Link>

    )
}