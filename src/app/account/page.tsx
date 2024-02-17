"use client"
import Image from "next/image";
import Styles from '@/app/style/account.module.css';
import Link from "next/link";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Profile(){
    const {isLogin} = useAppContext();
    const router = useRouter();
    useEffect(() => {

        if (!isLogin) {
            router.push('/login')
        }
        else {
            router.push('/account');
        }
    }, [isLogin])
    return (
        <div className={Styles.main}>
            <div className={Styles.container}>
            <h1>Profile</h1>
            <div className={Styles.boxContainer}>

                <div className={Styles.card}>
                    <Image src='/assets/images/box.png' width={60} height={50} alt="" priority/>
                    <div>
                        <p className={Styles.title}>Your Orders</p>
                        <p>Track, return, or buy things again</p>
                    </div>
                </div>
                <Link href='/account/profile'>
                <div className={Styles.card}>
                    <Image src='/assets/images/authentication.png' width={60} height={50} alt="" priority/>
                    <div>
                        <p className={Styles.title}>Login & security</p>
                        <p>Edit, login, name and mobile number</p>
                    </div>
                </div></Link>
                <Link href="/account/profile/address">
                <div className={Styles.card}>
                    <Image src='/assets/images/location.png' width={60} height={50} alt="" priority/>
                    <div>
                        <p className={Styles.title}>Your address</p>
                        <p>Edit and add address</p>
                    </div>
                </div> 
                </Link>
                <div className={Styles.card}>
                    <Image src='/assets/images/info.png' width={60} height={50} alt="" priority/>
                    <div>
                        <p className={Styles.title}>Contact us</p>
                        <p></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}