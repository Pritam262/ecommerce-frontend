import axios from "axios"

import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Styles from "@/app/style/ordercomponent.module.css";
import CancelBtn from "../../../../../components/cancelBtn";

interface ProductData {
    id: string;
    title: string;
    imageUrl: string;
    qty:number,
}
interface OrderItem {
    id: string;
    user: string;
    transId: string;
    mode: string;
    razorPayMethod: string;
    reazorPayId: string;
    product: ProductData;
    isDeliverd: Boolean;
    isCancel: Boolean;
    qty: number;
    price: number;
    totalPrice:number,
    address: string;
    phone: string;
    date: string;

}

interface OrderData {
    order: OrderItem;
}


interface Item {
    product: ProductData;

}

interface PrevOrder {

    orderData: Array<Item>;
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

    // console.log( isDeliverd ===false ? "show": isCancel === false ? "Show" : "Hide")

    // console.log(isDeliverd!=true && isCancel!= true ? "show btn" : isDeliverd && isCancel ? "show" : "Hide Btn");

    const prevOrder = await fetch(`${process.env.SERVER_IP}/api/order`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authtoken': String(token),
        }
    })

    const prevOrderData: PrevOrder = await prevOrder.json();


    const getMonth = (data: any) => {

        const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Aug', 'Dec']

        return month[data];

    }

    const getDateFormate = (date: any) => {


        const convertDate = new Date(date);

        return `${convertDate.getDate()} ${getMonth(convertDate.getMonth())} ${convertDate.getFullYear()}`;
    }


    return (
        // <Link href={`/product?q=${data.order.product.title}&id=${data.order.product.id}`}>
        <>

            {/* Order product start */}
            <div className={Styles.page}>
                <span className={Styles.navigation}><Link href={`/account`} className={Styles.link}>Your account </Link> <p> {" > "}</p> <Link href={`/account/order`} className={Styles.link}>Your Orders</Link> <p> {" > "}</p>  <p>{data.order.product.title.substring(0, 25)}.....</p></span>
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
                            {data?.order?.isDeliverd === false ? " " : <p>Deliverd 6 March</p>}
                            {data?.order?.isDeliverd === false ? " " : <p>Package was handed to resident</p>}
                            {/* {data?.order?.isDeliverd != true || data?.order?.isCancel != true  ? <CancelBtn id={data?.order?.id}/>:" "} */}
                            {/* {data?.order?.isDeliverd != true || data?.order?.isCancel != true  ? null : <CancelBtn id={data?.order?.id}/>}  */}
                            {data?.order?.isDeliverd != true && data?.order?.isCancel != true ? <CancelBtn id={data?.order?.id} isCancel={data?.order?.isCancel}/> : data?.order?.isDeliverd && data?.order?.isCancel ? <CancelBtn id={data?.order?.id} isCancel={data?.order?.isCancel}/> : <p style={{ color: 'red' }}>Order Canceled</p>}


                        </div>

                        <div><p>Track package</p></div>
                        <div><p>Order price : {data?.order?.price}</p></div>
                        <div><p>Order Qty : {data?.order?.qty}</p></div>
                        <div><p>Total Price : {data?.order?.totalPrice}</p></div>
                    </div>

                    <div className={Styles.orderInfo}>
                        <p>Order info</p>
                        <p>View order details</p>

                        <hr />
                        <p>Return window will be closed on 30 April 2024</p>
                        {/* <p>Order on 1 March 2024</p> */}
                        <p>Order on {getDateFormate(data?.order?.date)}</p>
                    </div>

                    <div className={Styles.opinion}>
                        <h2>How&apos;s your item?</h2>
                        <p>Write a product review</p>
                        <p>Leave seller feadback</p>
                    </div>
                </div>

            </div>


            {/* Order product end */}


            {/* Your previous order div start */}
            <div className={Styles.flexOrder}>
                <p className={Styles.heading}>Your previous Order</p>
                <div className={Styles.prevOrderComponent}>

                    {/* {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className={Styles.card}>
                        card
                    </div>
                ))} */}


                    {prevOrder && prevOrderData?.orderData.map((item, index) => {
                        return (
                            <div className={Styles.card} key={index}>

                                <img src={item?.product?.imageUrl} width={230} height={180} alt="" loading="lazy" />
                                <Link href={`/product?q=${item?.product?.title}&id=${item?.product?.id}`}>{item?.product?.title}</Link>
                            </div>

                        )
                    })

                    }
                </div>
            </div>


            {/* Your previous order div end */}


        </>
        // </Link>

    )
}