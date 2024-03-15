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
  // const [cartData, setCartData] = useState<CartData | null | undefined>();
  const { hostUrl, profileData , cartData} = useAppContext();
  const [payOption, setPayOption] = useState(0);
  const [addressIndex, setAddressIndex] = useState(0);

  // const orderProduct = async () => {

  //   try {

  //     const response = await fetch(`${hostUrl}/api/order?type=cart`, {
  //       method: 'post',
  //       headers: {
  //         'auth-token': String(searchParams?.id)
  //       },
  //       credentials: 'include',
  //     });

  //     setCartData(await response.json());
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const getCartProduct = async () => {
  //   try {

  //     const response = await axios.get(`${hostUrl}/api/product/cartproduct`, { withCredentials: true })

  //     setCartData(await response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // console.log(searchParams);
  useEffect(() => {
    // getPostData()
    // orderProduct();
    // getCartProduct()
  }, [])

  // const generateTransId = (length:number)=>{

  //   const smLetter = "abcdefghijklmnopqrstuvwxyz";
  //   const cpLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   const numericLetter = "123456789";



  //   return length;

  // }


  function generateTransId(length:number) {
    const numCount = 4; // Minimum count of numeric characters
    const smCount = 4; // Minimum count of alphabetic characters
    const cpCount = 4;

    // Characters to use in the OTP
    const numericCharacters = '123456789';
    const cpCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const smCharacters = 'abcdefghijklmnopqrstuvwxyz';

    let transId = '';

    // Generate minimum required numeric characters
    for (let i = 0; i < numCount; i++) {
        transId += numericCharacters.charAt(Math.floor(Math.random() * numericCharacters.length));
    }

    // Generate minimum required alphabetic characters
    for (let i = 0; i < smCount; i++) {
        transId += cpCharacters.charAt(Math.floor(Math.random() * cpCharacters.length));
    }

       // Generate minimum required alphabetic characters
       for (let i = 0; i < smCount; i++) {
        transId += smCharacters.charAt(Math.floor(Math.random() * smCharacters.length));
    }

    // Generate remaining characters randomly
    const remainingLength = length - (numCount + cpCount + smCount);
    const characters = numericCharacters + cpCharacters;

    for (let i = 0; i < remainingLength; i++) {
        transId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Shuffle the OTP characters to randomize their positions
    transId = shuffleString(transId);

    return transId;
}

// const createOtp = generateOTP(6);

// Function to shuffle the characters in the OTP string
function shuffleString(str:string) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

  const payNow = ()=>{

    const address  =profileData?.address[addressIndex];
    const item = cartData?.products
    const totalPrice = cartData?.totalPrice;

    const transId = generateTransId(30);

    const Data = JSON.stringify({address,item, totalPrice, transId});



    console.log(Data);


  }

  return (
    <div className={Styles.page}>
      {profileData && profileData.address.map((item, index) => {
        return (
          <div key={index} className={`${Styles.addressContainer} ${addressIndex === index ? Styles.activeAddressContainer : Styles.addressContainer}`} onClick={()=> setAddressIndex(index)}>
            <input type="radio" name="addressCheckBox" id={item?.id} className={Styles.inputRadio}  checked={addressIndex===index} onChange={()=> setAddressIndex(index)} />
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
            {payOption === 0 ? <button>Submit</button> : <button onClick={ payNow}>Pay Now ₹{cartData?.totalPrice}</button>}
          </div>
        </>
        }


        {/* <button className={Styles.payBtn}>{payOption === 0 ? "Submit" : `Pay now ${cartData?.totalPrice}`}</button> */}
      </div>
    </div>
  )
}