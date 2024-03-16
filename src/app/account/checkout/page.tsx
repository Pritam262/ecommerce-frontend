'use client'
import { useAppContext } from "@/app/context/appContext";
import axios from "axios";
import { cookies } from "next/headers";
import Styles from "@/app/style/checkoutpage.module.css";
import { useEffect, useState } from "react";

export default function CheckoutPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const token = searchParams;
  // const [cartData, setCartData] = useState<CartData | null | undefined>();
  const { hostUrl, profileData, cartData } = useAppContext();
  const [payOption, setPayOption] = useState(0);
  const [addressIndex, setAddressIndex] = useState(0);




  const payNow = async (type: String) => {


    const address = profileData?.address[addressIndex];
    const item = cartData?.products
    const totalPrice = cartData?.totalPrice;

    // const transId = generateTransId(30);

    const Data = JSON.stringify({ address, item, totalPrice});

    if (type === "cod") {

      try {

        const response = await fetch(`${hostUrl}/api/order?type=cart&mode=cod`, {
          method:"POST",
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body:Data
        });

        console.log(await response.json())
      } catch (error) {

        console.log(error);
      }
    }
    else {
      try {

        const response = await fetch(`${hostUrl}/api/order?type=cart&mode=paynow`, {
          method:'POST',
          credentials:'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body:Data
        });

        console.log(await response.json())
      } catch (error) {
        console.log(error);
      }

      console.log(Data, type);
    }
  }



  return (
    <div className={Styles.page}>
      {profileData && profileData.address.map((item, index) => {
        return (
          <div key={index} className={`${Styles.addressContainer} ${addressIndex === index ? Styles.activeAddressContainer : Styles.addressContainer}`} onClick={() => setAddressIndex(index)}>
            <input type="radio" name="addressCheckBox" id={item?.id} className={Styles.inputRadio} checked={addressIndex === index} onChange={() => setAddressIndex(index)} />
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

      <div className={Styles.cartContainer}>

        {cartData && cartData.products.map((item, index) => {
          return (
            <div key={index} className={Styles.cartCard}>
              <img src={item?.imageUrl} width={80} height={80} alt="" />
              <div className={Styles.cartCardDetails}>
                <p>{item?.title}</p>
                <p>Qty: {item?.qty}</p>
                <p>₹ {item?.price}</p>
              </div>
            </div>
          )

        })}
        {cartData && <>
          <div className={Styles.pamentOption}>
            <div className={Styles.payOption}><input className={Styles.inputRadio} type="radio" name="payoption" id="" defaultChecked={payOption === 0 ? true : false} onChange={() => setPayOption(0)} /><p>COD</p></div>
            <div className={Styles.payOption}><input className={Styles.inputRadio} type="radio" name="payoption" id="" defaultChecked={payOption === 1 ? true : false} onChange={() => setPayOption(1)} /> <p>Pay now</p></div>
          </div>
          <div className={Styles.payBtn}>
            {payOption === 0 ? <button onClick={() => payNow("cod")}>Submit</button> : <button onClick={() => payNow("paynow")}>Pay Now ₹{cartData?.totalPrice}</button>}
          </div>
        </>
        }


        {/* <button className={Styles.payBtn}>{payOption === 0 ? "Submit" : `Pay now ${cartData?.totalPrice}`}</button> */}
      </div>
    </div>
  )
}