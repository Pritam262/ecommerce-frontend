'use client'

import { useAppContext } from "@/app/context/appContext";

interface Props{
    id:String;
}
export default function CancelBtn(props:Props){


    const {hostUrl} = useAppContext();
    const handleCancel = async (id:String)=>{

        try {
            
            const response = await fetch(`${hostUrl}/api/order/cancelorder?id=${id}`, {
                method:'POST',
                credentials:'include',
            })
            
            const resData = await response.json();
            console.log(resData);

        } catch (error) {
            console.log("Faild to fetch")
        }
        }

    return(
        <button style={{backgroundColor:'transparent', padding:'5px 3px',  color:'#000', cursor:'pointer', }} onClick={()=> handleCancel(props?.id)}>Cancel order</button>
    )
}