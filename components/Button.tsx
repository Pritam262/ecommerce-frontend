"use client"

import { useRouter } from "next/navigation";

export  function CartButton(props: any) {

    const CartProduct = {
        id: props.id,
        title: props.title,
        qty: 1,
    }
    const cartProduct = async (id: string, qty:string) => {

        try {

            const setCart = await fetch(`http://127.0.0.1:3000/api/product/cart?proId=${id}`, {
                method: 'post',
                headers: {
                    'Content-Type':'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`
                },
                body: JSON.stringify({ qty: qty })
            })

            
            if (setCart.status === 200) {
                localStorage.setItem("cart-product", JSON.stringify(CartProduct))
                console.log(await setCart.json())
                // console.log("Cart product", id);
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getLocalStorageData = () => {

        try {

            const getLocalStorageData = localStorage.getItem('cart-product');

            if (getLocalStorageData != null) {

                // console.log("Get localStorage data", JSON.parse(getLocalStorageData));
            }
        } catch (error) {
            console.log(error)
        }

    }

    getLocalStorageData();

    return (
        <div style={{ margin: "15px 0 0 15px", cursor: "pointer", border: " 1px solid #000", width: "max-content", padding: " .5rem 1.5rem" }} onClick={() => cartProduct(props.id, "")}>Cart</div>
    )
}

export function BuyButton (props:any){
 
    const router = useRouter();

    // <div style={{ margin: "15px 0 0 15px", cursor: "pointer", border: " 1px solid #000", width: "max-content", padding: " .5rem 1.5rem" }} onClick={ ()=>router.push(`/buy?id=${id.id}`) }>Buy</div>
        return (
            <div style={{ margin: "15px 0 0 15px", cursor: "pointer", border: " 1px solid #000", width: "max-content", padding: " .5rem 1.5rem" }} onClick={ ()=> console.log(`Buy product ${props.id}, type ${props.type}`) }>Buy</div>
        )
   
}