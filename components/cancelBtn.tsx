'use client'

import { useState } from "react";

import { useAppContext } from "@/app/context/appContext";

interface Props {
    id: String;
    isCancel: Boolean,
}
export default function CancelBtn(props: Props) {

    const [isOrderCancel, setIsOrderCancel] = useState<Boolean>(props.isCancel);
    const { hostUrl } = useAppContext();
    const handleCancel = async (id: String) => {

        try {

            const response = await fetch(`${hostUrl}/api/order/cancelorder?id=${id}`, {
                method: 'POST',
                credentials: 'include',
            })

             await response.json();

            if (response.status === 200) {
                setIsOrderCancel(true)
            }

        } catch (error) {
            console.log("Faild to fetch")
        }
    }

    return (
        <>
            {isOrderCancel != true ? <button style={{ backgroundColor: 'transparent', padding: '5px 3px', color: '#000', cursor: 'pointer', }} onClick={() => handleCancel(props?.id)}>Cancel order</button> : <p style={{ color: 'red' }}>Order Canceled</p>}
        </>

    )
}