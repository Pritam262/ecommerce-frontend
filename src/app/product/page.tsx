
import { Metadata } from "next";
import Link from "next/link";
import Button from "../../../components/cartBtn";

import ProductImage from "../../../components/productImage";

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
        keywords:'mobile s23 5g mobile'
    };
}

export default async function productPage({ params, searchParams }: { params: { slug: string }; searchParams: { q: string; id: string } }) {

    const response = await fetch(`http://127.0.0.1:3000/api/product/getproduct?productid=${searchParams?.id}`, {cache:'no-cache'});
    const resData = await response.json();

    const data = resData.product;


    if (typeof window !== "undefined") {

        window.localStorage.setItem('product', data);
    }

    return (
        <div>
            Search slug: {searchParams?.q}
            Search Query: {searchParams.id}

            <p>Title: {data?.title}</p>
            <Link href={data?.seller.id}>Visit the {data?.seller.sellername} store</Link>
            <p>{data?.description}</p>
            <p>{data?.price}</p>
            <p>{data?.color}</p>

{    data &&  ( <ProductImage images={data?.images}/>)}

            {/* {data && data.images.map((item: any) => {
                return (
                    <img src={`http://127.0.0.1:3000/${item?.path}`} alt="" style={{ width: '150px' }} key={item?._id} />
                )
            })} */}
           <Button id={String(data?.id)} title={data?.title}/>
        </div>
    )
}