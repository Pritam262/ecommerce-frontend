
import { Metadata } from "next";
import Link from "next/link";
import { CartButton, BuyButton } from "../../../components/Button";
import ProductImage from "../../../components/productImage";
import Styles from "@/app/style/productpage.module.css";
import Navbar from "../../../components/navbar";
import ExchangeComponent from "../../../components/productexchange";
import React from "react";

export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
    // read route params
    // const id = searchParams.q;
    const url = `http://127.0.0.1:3000/api/product/getproduct?productid=${searchParams?.id}`;

    // fetch data
    const response = await fetch(url).then((res) => res.json());
    const data = response.product;

    return {
        title: `Buy ${data.title}`,
        description: `India's best e Commerce platform where you can buy any product like mobile, tv, fridge, ac, Air Conditioner`,
        keywords: 'mobile s23 5g mobile'
    };
}

export default async function productPage({ params, searchParams }: { params: { slug: string }; searchParams: { q: string; id: string } }) {

    const response = await fetch(`http://127.0.0.1:3000/api/product/getproduct?productid=${searchParams?.id}&query=${searchParams?.q}`, { cache: 'no-cache' });
    const resData = await response.json();

    const data = resData.product;

    if (typeof window !== "undefined") {

        window.localStorage.setItem('product', data);
    }

    return (
        <>
            {/* <Navbar/> */}
            <div className={Styles.page}>

                <div className={Styles.productComponent}>

                    {data && (<ProductImage images={data?.images} />)}

                    <div className={Styles.productDetails}>

                        <p className={Styles.title}>{data?.title}</p>
                        <Link href={`/seller?q=${data?.seller.id}`} className={Styles.link}>Visit the {data?.seller.sellername} store</Link>
                        {/* <p>{data?.description}</p> */}
                        <ul>

                        {data?.description && data?.description.map((item:any, index:number)=>{
                            return(
                                <li key={index}>{item}</li>
                                )
                        })}
                        </ul>
                        <p className={Styles.price}>{data?.price}</p>

                        <div className={Styles.colorOption}>

                            <p>Colour: {data?.technicaldetails && data?.technicaldetails[0].color}</p>
                        </div>

                    </div>


                    <div className={Styles.buyOption}>

                        <ExchangeComponent price={data?.price} />

                        <div className={Styles.option}>
                            <CartButton id={String(data?.id)} title={data?.title} />
                            <BuyButton id={String(data?.id)} type={'single'} />

                        </div>
                    </div>

                </div>

                <div style={{display:'flex', alignItems:'center'}}><span className={Styles.brands}>Top Brands</span> <p>{data?.seller.sellername}</p></div>

                {data && (
                    <table>
                    <tbody>
                      {data .technicaldetails && data.technicaldetails.map((details:any) => (
                        Object.entries(details).map(([key, value]) => (
                          <tr key={key}>
                            <td>{key}</td>
                            <td>{value as React.ReactNode}</td>
                          </tr>
                        ))
                      ))}
                    </tbody>
                  </table>
                )}
            </div>
        </>
    )
}