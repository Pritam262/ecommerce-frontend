'use client'
import { useAppContext } from "@/app/context/appContext";
import axios from "axios";
import { cookies } from "next/headers";
import Styles from "@/app/style/checkoutpage.module.css";
import { useEffect, useState } from "react";

// const Razorpay = require('razorpay');
export default function CheckoutPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const type = searchParams?.type;

  const { hostUrl, profileData, cartData , RAZOR_KEY_ID} = useAppContext();
  const [payOption, setPayOption] = useState(0);
  const [addressIndex, setAddressIndex] = useState(0);


  const [paymentId, setPaymentId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const payNow = async (mode: String) => {


    const address = profileData?.address[addressIndex];
    const item = cartData?.products
    const totalPrice = Number(cartData?.totalPrice) || 1;

    // const transId = generateTransId(30);

    const Data = JSON.stringify({ address, item, totalPrice});

    if (mode === "cod") {

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

    else{
      try {

        const response = await fetch(`${hostUrl}/api/payment/order?type=${type}`, {
          method:'POST',
          credentials:'include',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({amount:totalPrice}),
        })
        
        const data = await response.json();

        const options = {
          key: RAZOR_KEY_ID, // Razorpay Key ID
          amount: Number(totalPrice * 100), // Example amount
          currency: 'INR',
          name: 'E Com',
          description: 'Purchase description',
          order_id: data.order.id,
          notes: {
              address: "Razorpay Corporate Office"
          },
          theme: {
              color:  "#A951F0"
          },
          handler: async function (response: any) {
            try {
              const paymentResponse = await fetch(`${hostUrl}/api/payment/payment-validation?type=${data.type}`, {
                method:'POST',
                credentials:'include',
                headers:{
                  'Content-Type':'application/json',
                },
                body:JSON.stringify({'payment_id': response.razorpay_payment_id,'order_id': response.razorpay_order_id, 'signature': response.razorpay_signature, 'address': address})
              });

              console.log(await paymentResponse.json());

              setPaymentId(response.razorpay_payment_id);
            } catch (error) {
              console.error('Error processing payment:', error);
              setErrorMessage('Error processing payment');
            }
          },
        };


        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();

        // console.log(window);
        

      } catch (error) {
        console.log(error)
      }
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

      </div>
    </div>
  )
}