'use client'
import { useAppContext } from "@/app/context/appContext";
import Styles from '@/app/style/account.module.css';
import {useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Address() {
    const { isLogin, profileData, deleteAddress } = useAppContext();
    const router = useRouter();
    const editAddress = (user: string, id: string, index: number) => {
        console.log(`Update address : ${id} index: ${index} by ${user}`);
    }
    useEffect(() => {

        if (!isLogin) {
            router.push('/login')
        }
        else {
            router.push('/account/profile/address');
        }
    }, [isLogin])
    return (
        <div className={Styles.addressPage}>
            <p className={Styles.heading}>Your addresses :</p>
            <div className={Styles.addressContainer}>
                {profileData?.address.map((item, index: number) => (
                    <div className={Styles.addressCard} key={index}>
                        <p>Address: {item.addressline}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Dist: {item.district}</p>
                        <p>State: {item.stateName}</p>
                        <p>Pin: {item.pinCode}</p>
                        <p>City: {item.city}</p>
                        <div className={Styles.optionBtn}>
                            <button className={Styles.optionBtnIcon} onClick={() => editAddress(profileData?.user, item.id, index)}>Edit</button>
                            {item?.isDefault ? "" : <button className={Styles.optionBtnIcon} onClick={() => deleteAddress(profileData?.user, item.id, index)}>Delete</button>}
                            {item?.isDefault ? "" : <button className={Styles.optionBtnIcon}>Make Default</button>}
                        </div>
                    </div>
                ))}
            </div>
            <Link href='/account/profile/address/addaddress'>Add Address</Link>
        </div>
    )
}