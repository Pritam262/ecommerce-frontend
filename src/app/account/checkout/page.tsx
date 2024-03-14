'use client'
import { useAppContext } from "@/app/context/appContext";
import axios from "axios";
import { cookies } from "next/headers";
import Styles from "@/app/style/checkoutpage.module.css";
import { useEffect, useState } from "react";
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
  token: string;
}
export default function CheckoutPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const token = searchParams;
  const [data, setData] = useState<CartData | null | undefined>();
  const { hostUrl, profileData } = useAppContext();

  const orderProduct = async () => {

    try {

      const response = await fetch(`${hostUrl}/api/order?type=cart`, {
        method: 'post',
        headers: {
          'auth-token': String(searchParams?.id)
        },
        credentials: 'include',
      });

      setData(await response.json());
    } catch (error) {
      console.log(error)
    }
  }


  // console.log(searchParams);
  useEffect(() => {
    // getPostData()
  }, [])
  return (
    <div>
      {profileData && profileData.address.map((item, index) => {
        return (
          <div key={index} className={Styles.addressContainer}>
            {/* <div className={Styles.addressCheckBox}>

          </div> */}
            <input type="radio" name="addressCheckBox" id={item?.id} className={Styles.addressCheckBox} defaultChecked={item?.isDefault}/>
            <div>

              <p>{item?.addressline}</p>
              <p>{item?.city}</p>
              <p>{item?.phone}</p>
              <p>{item?.district}</p>
              <p>{item?.stateName}</p>
              <p>{item?.pinCode}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}