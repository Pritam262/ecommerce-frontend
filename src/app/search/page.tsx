
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

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

    const response = await fetch(`http://127.0.0.1:3000/api/product/searchproducts?query=${searchParams.q}&page=${searchParams.page}`);
    const resData = await response.json();
    // console.log(resData);
    return (
        <div>
            {/* <p>Search query: {searchParams?.q} and id: {searchParams?.id}</p> */}
            {resData && resData.products.map((item: any) => {
                return (
                        <div key={item?.id}>
                            <Link href={`/${item?.title}&id=${item?.id}`}>

                            <Image src={item?.imageUrl} width={150} height={200} alt='' />

                            <div>
                                <p>{item?.title}</p>
                                <p>₹ {item?.price}</p>
                            </div>
                            </Link>
                        </div>
                )
            })}

<div>
    <button style={{padding: '.5rem 1.5rem'}}>1</button>
    <button style={{padding: '.5rem 1.5rem', marginLeft:'15px'}}>{resData && resData?.totalPage}</button>
    <Link href={`http://127.0.0.1:3001/search?q=${searchParams.q}&id=${searchParams.id}&page=2`}> <button style={{padding: '.5rem 1.5rem'}}>Next</button></Link>
</div>


        </div>
    )
}