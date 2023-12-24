'use client'
import React from 'react'
import Styles from '@/app/style/navbar.module.css';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import Link from 'next/link';
import { useAppContext } from '@/app/context/appContext';
export default function Navbar() {
    const { isLogin, profileData } = useAppContext();
    return (
        <div className={Styles.navbar}>
            <div className={`${Styles.leftSection} ${Styles.flex}`}>
                <div className={Styles.logo}>Logo</div>
                <div className={Styles.flex}>
                    <GrLocation className={Styles.locIcon} />
                    {/* <FaSearch  className={Styles.icon}/> */}
                    <div>
                        <p>Delevering to Kolkata 700059</p>
                        <Link href='/'>Update location</Link>
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


                <div>
                    {isLogin ? <>  <Link href='/account'>
                        <span>Hello, <span>{profileData?.fname}</span></span></Link>
                        <p>Account & Lists</p> </> : <>  <Link href='/login'>
                            <span>Hello, <span>sign in</span></span></Link>
                        <p>Account & Lists</p></>}
                </div>

                <div>
                    <p>Returns</p>
                    <p>& Orders</p>
                </div>

                <div>
                    <p>Cart</p>
                </div>

            </div>
        </div>
    )
}

