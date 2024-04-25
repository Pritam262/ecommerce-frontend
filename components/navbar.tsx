'use client'
import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import gretherStyles from '@/app/style/navbar.module.css';
import Styles from "@/app/style/smallnavbar.module.css";
import Image from 'next/image';
import { FaSearch, FaBars } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import Link from 'next/link';
import { useAppContext } from '@/app/context/appContext';
import { useRouter } from 'next/navigation';
type suggestionData = {
    id: string;
    key: String;
    score: String;
}
type suggestions = {
    prefix: String;
    suggestions: Array<suggestionData>;
}
export default function Navbar() {

    const router = useRouter();
    const [screenWidth, setScreenWidth] = useState<number>(1200);
    const { hostUrl, isLogin, profileData, cartData } = useAppContext();
    interface IP {
        ip: string;
    }
    const [ip, setIp] = useState<IP>();

    const [suggestions, setSuggestions] = useState<suggestions | null | undefined>();
    const [prefix, setPrefix] = useState(" ");

    // const getIpAddress = async () => {
    //     try {
    //         const response = await fetch("http://127.0.0.1:3000/api/auth/getipaddress");
    //         const data = await response.json();
    //         console.log("IP", data)
    //         setIp(data)
    //         return data;

    //     } catch (error) {
    //         console.log({ error })
    //     }
    // }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setPrefix(e.target.value);
        handleSuggestion(e.target.value);
    }
    const handleSuggestion = async (prefix: string) => {
        try {

            const response = await fetch(`${hostUrl}/api/product/search-suggestions?query=${prefix}`);
            const resData = await response.json();
            setSuggestions(resData);
        }
        catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        // getIpAddress();
        setScreenWidth(window.innerWidth);
    }, [])
    //     const browserName = navigator.appName;
    // const browserVersion = navigator.appVersion;
    // const platform = navigator.platform;
    // console.log(browserName, browserVersion, platform);

    return (
        <>{screenWidth && screenWidth > 600 ?
            <div className={gretherStyles.navbar}>
                <div className={`${gretherStyles.leftSection} ${gretherStyles.flex}`}>
                    <FaBars className={gretherStyles.humbergur} />
                    <div className={gretherStyles.logo}>Ecommerce</div>
                    <div className={gretherStyles.flex}>
                        <GrLocation className={`${gretherStyles.locIcon} ${gretherStyles.none}`} />
                        {/* <FaSearch  className={gretherStyles.icon}/> */}
                        <div className={`${gretherStyles.location} ${gretherStyles.none}`}>
                            {isLogin ? (profileData?.address[0] == null) ? <Link href='/account/profile/address'><p className={gretherStyles.navText}>Kolkata</p> <p className={gretherStyles.navText}>700059</p> </Link> : <Link href='/account/profile/address'> <p className={gretherStyles.navText}> {profileData?.address[0] && profileData?.address[0].city}</p> <p className={gretherStyles.navText}> {profileData?.address[0] && profileData?.address[0].pinCode}</p> </Link> : <> <p className={gretherStyles.navText}>Kolkata </p> <p className={gretherStyles.navText}>700059</p>
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

                <div className={`${gretherStyles.flex} ${gretherStyles.searchSection} `}>
                    {/* <input type="text" name="search" id="" placeholder={prefix.length === 1 ? 'Search something' : ''}
                    value={prefix.length <= 1 ? '' : prefix} onChange={handleChange} /> */}

                    <input type="text" name="search" id="" placeholder='Search something' onChange={handleChange} />
                    <FaSearch className={gretherStyles.searchIcon} onClick={()=>handleSuggestion} />
                </div>

                {/* Right side */}

                <div className={`${gretherStyles.rightNavbar} ${gretherStyles.flex}`}>

                    <div className={`${gretherStyles.flex} ${gretherStyles.none}`}>
                        <Image src='/india.jpg' width={25} height={20} alt='' className={gretherStyles.flag} />
                        <p style={{ marginLeft: '5px' }} className={gretherStyles.navText}>EN</p>
                    </div>


                    <div className={gretherStyles.account}>
                        {isLogin ? <>  <Link href='/account'>
                            <span className={`${gretherStyles.navText} ${gretherStyles.none}`}>Hello, <span className={gretherStyles.navText}>{profileData?.fname}</span></span></Link>
                            <p className={`${gretherStyles.navText} ${gretherStyles.none}`}>Account & Lists</p> <IoPersonOutline className={gretherStyles.personIcon} /> </> : <>  <Link href='/login'>
                                <span className={gretherStyles.navText}>Hello, <span className={gretherStyles.navText}>sign in</span></span></Link>
                            <p className={gretherStyles.navText}>Account & Lists</p></>}
                    </div>

                    <div className={gretherStyles.returnDiv}>
                        <p className={gretherStyles.navText}>Returns</p>
                        <p className={gretherStyles.navText}>& Orders</p>
                    </div>

                    {isLogin ? <Link href="/account/cart">
                        <div className={gretherStyles.cartItem}>
                            <FiShoppingCart className={gretherStyles.cartIcon} />
                            {(cartData?.totalLength === 0) ? " " : <p className={gretherStyles.cartNum}>{cartData?.totalLength}</p>}
                        </div>
                    </Link> : <Link href="/login">
                        <div className={gretherStyles.cartItem}>
                            <FiShoppingCart className={gretherStyles.cartIcon} />
                        </div>
                    </Link>}

                </div>


                {/* Search suggestion container */}

                {suggestions?.suggestions && suggestions.suggestions.length > 0 ? <div className={gretherStyles.searchSuggestion}>
                    {suggestions && suggestions.suggestions.map((item) => {
                        return (
                            <Link href={`/search?q=${item?.key}&id=${item?.id}&page=1`} key={item?.id}><p>{item?.key}</p></Link>
                        )
                    })}
                </div> : ""}
            </div> : <div className={Styles.navbar}>

                <div className={Styles.topBar}>

                        <div style={{ display: 'flex', alignItems: 'center' }}>

                            <FaBars className={Styles.humbergur} />
                            <div className={Styles.logo}>Ecommerce</div>
                        </div>

             

                    <div className={Styles.rightNavbar} >
                       { isLogin ? <IoPersonOutline onClick={()=>router.push('/account')}/>: <Link href="/login">Sign In &gt; </Link>}
                        {isLogin ? <Link href="/account/cart">
                            <div className={Styles.cartItem}>
                                <FiShoppingCart className={Styles.cartIcon} />
                                {(cartData?.totalLength === 0) ? " " : <p className={Styles.cartNum}>{cartData?.totalLength}</p>}
                            </div>
                        </Link>

                            : <Link href="/login">
                                <div className={Styles.cartItem}>
                                    <FiShoppingCart className={Styles.cartIcon} />
                                </div>
                            </Link>}
                    </div>
                </div>
                {/* Center bar */}

                <div className={Styles.searchSection}>
                    {/* <input type="text" name="search" id="" placeholder={prefix.length === 1 ? 'Search something' : ''}
                    value={prefix.length <= 1 ? '' : prefix} onChange={handleChange} /> */}

                    <input type="text" name="search" id="" placeholder='Search something' onChange={handleChange} className={Styles.searchInput} />
                    <div className={Styles.searchIconDiv}>

                        <FaSearch className={Styles.searchIcon} onClick={()=>handleSuggestion} />
                    </div>
                </div>

                {/* Right side */}

                {/* <div className={`${Styles.rightNavbar} ${Styles.flex}`}>

                    <div className={Styles.account}>
                        {isLogin ? <>  <Link href='/account'>
                            <span className={`${Styles.navText} ${Styles.none}`}>Hello, <span className={Styles.navText}>{profileData?.fname}</span></span></Link>
                            <p className={`${Styles.navText} ${Styles.none}`}>Account & Lists</p> <IoPersonOutline className={Styles.personIcon} /> </> : <>  <Link href='/login'>
                                <span className={Styles.navText}>Hello, <span className={Styles.navText}>sign in</span></span></Link>
                            <p className={Styles.navText}>Account & Lists</p></>}
                    </div>


                </div> */}


                {/* Search suggestion container */}

                {suggestions?.suggestions && suggestions.suggestions.length > 0 ? <div className={Styles.searchSuggestion}>
                    {suggestions && suggestions.suggestions.map((item) => {
                        return (
                            <Link href={`/search?q=${item?.key}&id=${item?.id}&page=1`} key={item?.id}><p>{item?.key}</p></Link>
                        )
                    })}
                </div> : ""}
            </div>}
        </>
    )
}

