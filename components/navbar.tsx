'use client'
import React from 'react'
import Styles from '@/app/style/navbar.module.css';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';
import { useAppContext } from '@/app/context/appContext';
export default function Navbar() {
    const { isLogin, profileData, cartData } = useAppContext();
    return (
        <div className={Styles.navbar}>
            <div className={`${Styles.leftSection} ${Styles.flex}`}>
                <div className={Styles.logo}>Logo</div>
                <div className={Styles.flex}>
                    <GrLocation className={Styles.locIcon} />
                    {/* <FaSearch  className={Styles.icon}/> */}
                    <div>
                        {isLogin ? <p> {profileData?.address[0].city} {profileData?.address[0].pinCode}</p> : <p>Kolkata 700059</p>}
                        {isLogin ? <Link href='/account/profile/address'>Update location</Link> : <p>Update location</p>}
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

                <Link href="/account/cart">
                    <div className={Styles.cartItem}>
                    <FiShoppingCart className={Styles.cartIcon}/>
                    <p className={Styles.cartNum}>{cartData?.totalLength}</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}

