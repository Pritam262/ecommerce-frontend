
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Styles from "@/app/style/searchpage.module.css";

export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
    // read route params
    // const id = searchParams.q;
    // const url = `http://127.0.0.1:3000/api/product/searchproducts?query=${searchParams.q}&page=${1}`;

    // // fetch data
    // const response = await fetch(url).then((res) => res.json());
    // const data = response.products[0];
    // console.log(response);

    return {
        title: `e Commerce.in: ${searchParams.q}`,
        description: `India's best e Commerce platform where you can buy any product like mobile, tv, fridge, ac, Air Conditioner`,
    };
}

export default async function searchProducts({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    // console.log("Slug", searchParams)

    // const fetchSearchProducts = async (page:number) => {
    //     const response = await fetch(`http://127.0.0.1:3000/api/product/searchproducts?query=${searchParams.q}&page=${page}`);
    //     const resData = await response.json();
    //     // console.log(resData);
    //     return resData;
    // }
    // fetchSearchProducts(1);
    const hostUrl = process.env.SERVER_IP;
    const response = await fetch(`${hostUrl}/api/product/searchproducts?query=${searchParams.q}&page=${searchParams.page}`, { cache: 'no-cache' });
    const resData = await response.json();
    return (

        <div className={Styles.page}>

            <div className={Styles.cardContainer}>
                {/* <p>Search query: {searchParams?.q} and id: {searchParams?.id}</p> */}
                {(response.status === 200) ? <> {resData && resData.products.map((item: any) => {
                    return (
                        <Link href={`/product?q=${item?.title}&id=${item?.id}`} key={item?.id}>
                            <div  className={Styles.card}>

                                <img src={item?.imageUrl} className={Styles.image} width={150} height={200} alt='' />

                                <div className={Styles.proDetails}>
                                    <p className={Styles.title}>{item?.title}</p>
                                    <span><p>Star</p> 1,314</span>
                                    <span className={Styles.price}><span>₹</span> <span className={Styles.priceTag}><p >{item?.price}</p> <span className={Styles.offPrice}>M.R.P: ₹ 89,999 (28% off)</span></span></span>
                                    <span className={Styles.offerTag}>Flat INR 10000 on HDFC BankCard</span>
                                    <p>prime</p>
                                    <p className={Styles.stockDetails}>only 2 left in stock</p>
                                </div>
                            </div>
                        </Link>
                    )
                })} </> : <div>Product not found</div>
                }

            </div>
            <div>
                {(resData.totalPage != 1) ? <>  <button style={{ padding: '.5rem 1.5rem' }}>1</button>
                    <button style={{ padding: '.5rem 1.5rem', marginLeft: '15px' }}>{resData && resData?.totalPage}</button> </> : ""}
                {(resData.totalPage != resData.page) ? <Link href={`/search?q=${searchParams.q}&id=${searchParams.id}&page=${parseInt(resData.page) + 1}`}> <button style={{ padding: '.5rem 1.5rem' }}>Next</button></Link> : ""}
            </div>
        </div>
    )
}