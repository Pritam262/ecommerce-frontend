'use client'

import { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/appContext";
import Styles from '@/app/style/account.module.css';
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Profile() {

    const { profileData } = useAppContext();
    // const [data, setData] = useState({});
    // const getProfile = async () => {
    //     const response = await fetch('http://127.0.0.1:3000/api/auth/profile', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'auth-token': localStorage.getItem('auth-token')
    //         },

    //     });

    //     const resData = await response.json();
    //     setData(resData.data);


    // }

    // useEffect(() => {
    //     getProfile()
    // }, [])

    const editAddress = (id: string, index: number) => {
        console.log("Update product", id, "Index", index);
    }
    const deleteAddress = (id: string, index: number) => {
        console.log("Delete product", id, "Index", index);
    }
    return (
        <div className={Styles.profileContainer}>
            <p>Name: {profileData?.fname} {profileData?.lname}</p>
            <p>Email: {profileData?.email}</p>
            <p>Password:xxxxxxx</p>
            <p>Phone: {`+${profileData?.countryCode} ${profileData?.phone}`}</p>

            <div className={Styles.addressContainer}>

                {profileData?.address.map((item, index: number) => (
                    <div className={Styles.addressCard} key={index}>
                        <p>Id: {profileData?._id}</p>
                        <p>Address: {item.addressline}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Dist: {item.district}</p>
                        <p>State: {item.stateName}</p>
                        <p>Pin: {item.pinCode}</p>
                        <div className={Styles.optionBtn}>
                            <FaEdit className={Styles.optionBtnIcon} onClick={()=>editAddress(profileData?._id, index)} />
                            <MdOutlineDelete className={Styles.optionBtnIcon} onClick={()=>deleteAddress(profileData?._id, index)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}