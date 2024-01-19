'use client'
import React, { useEffect, useState } from 'react'
import Styles from '@/app/style/navbar.module.css';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';
import { useAppContext } from '@/app/context/appContext';
export default function Navbar() {
    const { isLogin, profileData, cartData } = useAppContext();
    interface IP {
        ip: string;
    }
    const [ip, setIp] = useState<IP>();
    const getIpAddress = async () => {
        try {
            const response = await fetch("http://127.0.0.1:3000/api/auth/getipaddress");
            const data = await response.json();
            setIp(data)
            return data;

        } catch (error) {
            console.log({ error })
        }
    }

    useEffect(() => {
        getIpAddress();
    }, [])

    //     const browserName = navigator.appName;
    // const browserVersion = navigator.appVersion;
    // const platform = navigator.platform;
    // console.log(browserName, browserVersion, platform);

    return (
        <div className={Styles.navbar}>
            <div className={`${Styles.leftSection} ${Styles.flex}`}>
                <div className={Styles.logo}>Ecommerce</div>
                <div className={Styles.flex}>
                    <GrLocation className={Styles.locIcon} />
                    {/* <FaSearch  className={Styles.icon}/> */}
                    <div>
                        {isLogin ? (profileData?.address[0] == null) ? <Link href='/account/profile/address'><p>Kolkata</p> <p>700059</p> </Link> : <Link href='/account/profile/address'> <p> {profileData?.address[0] && profileData?.address[0].city}</p> <p> {profileData?.address[0] && profileData?.address[0].pinCode}</p> </Link> : <> <p>Kolkata </p> <p>700059</p>
                            <p>{ip?.ip}</p>
                        </>
                        }
                        {/* {isLogin ? <Link href='/account/profile/address'>Update location</Link> : <p>Update location</p>} */}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            {/* Center bar */}

            <div className={`${Styles.flex} ${Styles.searchSection}`}>
                <input type="text" name="search" id="" />
                <FaSearch className={Styles.searchIcon} />
            </div>

            {/* Right side */}

            <div className={`${Styles.rightNavbar} ${Styles.flex}`}>

                <div className={Styles.flex}>
                    <Image src='/india.jpg' width={25} height={20} alt='' />
                    <p style={{ marginLeft: '5px' }}>EN</p>
                </div>


                <div className={Styles.account}>
                    {isLogin ? <>  <Link href='/account'>
                        <span>Hello, <span>{profileData?.fname}</span></span></Link>
                        <p>Account & Lists</p> </> : <>  <Link href='/login'>
                            <span>Hello, <span>sign in</span></span></Link>
                        <p>Account & Lists</p></>}
                </div>

                <div className={Styles.returnDiv}>
                    <p>Returns</p>
                    <p>& Orders</p>
                </div>

                {isLogin ? <Link href="/account/cart">
                    <div className={Styles.cartItem}>
                        <FiShoppingCart className={Styles.cartIcon} />
                        {(cartData?.totalLength === 0) ? " " : <p className={Styles.cartNum}>{cartData?.totalLength}</p>}
                    </div>
                </Link> : <Link href="/login">
                    <div className={Styles.cartItem}>
                        <FiShoppingCart className={Styles.cartIcon} />
                    </div>
                </Link>}

            </div>
        </div>
    )
}

