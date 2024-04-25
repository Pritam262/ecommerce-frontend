"use client"

import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/appContext";
import Styles from "@/app/style/productpage.module.css";

interface CartBtn {
    id: string,
    title: string
}
export const CartButton: React.FC<CartBtn> = ({ id, title }) => {

    const { hostUrl } = useAppContext();
    const CartProduct = {
        id: id,
        title: title,
        qty: 1,
    }
    const cartProduct = async (id: string, qty: number) => {

        try {

            const setCart = await fetch(`${hostUrl}/api/product/cart?proId=${id}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken': `${localStorage.getItem('auth-token')}`
                },
                body: JSON.stringify({ qty: qty })
            })


            // if (setCart.status === 200) {
            //     // localStorage.setItem("cart-product", JSON.stringify(CartProduct))
            //     // console.log(await setCart.json())
            //     // console.log("Cart product", id);
            // }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={Styles.btn} onClick={() => cartProduct(id, 1)}>Cart</div>
    )
}

interface BuyBtnProps {
    id: string,
    type: string,
}
export const BuyButton: React.FC<BuyBtnProps> = ({ id, type }) => {
    const { hostUrl } = useAppContext();
    const router = useRouter();

    // <div style={{ margin: "15px 0 0 15px", cursor: "pointer", border: " 1px solid #000", width: "max-content", padding: " .5rem 1.5rem" }} onClick={ ()=>router.push(`/buy?id=${id.id}`) }>Buy</div>
    return (
        <div className={Styles.btn} onClick={() => router.push(`/account/checkout?proid=${id}&type=${type}`)}>Buy</div>
    )

}