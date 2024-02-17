import Styles from "@/app/style/sellerpage.module.css";
import Image from "next/image";
export default async function AllSellerProduct({ params, searchParams }: { params: { slug: string }; searchParams: { q: string; id: string } }) {

    const response = await fetch(`http://127.0.0.1:3000/api/seller/getimages?userid=${searchParams.q}`);
    const resData = await response.json();
    const data = resData.success;

    // console.log(data);
    return (
        <div className={Styles.page}>

            <div className={Styles.container}>

                <div className={Styles.header}>
                    {/* <p>Seller products on User frontend: {searchParams.q}</p>
                    <p>Company banner image</p> */}
                    <Image src={data.header && data.header.imageUrl} width={300} height={100} alt="" priority />
                </div>

                <div className={Styles.navigationOption}>
                    Navigation Option
                </div>
                {data.images && data.images.map((item: any) => {
                    return (
                        <div className={item.imageType === 'grid' ? `${Styles.grid}` : `${Styles.banner}`} key={item.id}>

                            {item.files && item.files.map((image: any) => {
                                return (

                                    // <div className={item.imageType === "grid"? `${Styles.gridItem}` : `${Styles.bannerItem}`} key={image.imageId}>

                                        <Image className={item.imageType === "grid"? `${Styles.gridItem}` : `${Styles.bannerItem}`} key={image.imageId} src={image.imageUrl} width={400} height={250} alt="" priority />
                                    // </div>
                                )
                            })}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}