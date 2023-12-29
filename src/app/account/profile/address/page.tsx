'use client'
import { useAppContext } from "@/app/context/appContext";
import Styles from '@/app/style/account.module.css';
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Address() {
    const { profileData, deleteAddress } = useAppContext();
    const editAddress = (user: string, id: string, index: number) => {
        console.log(`Update product : ${id} index: ${index} by ${user}`);
    }
    // const deleteAddress = (user: string, id: string, index: number) => {
    //     console.log(`Delete product : ${id} index: ${index} by ${user}`);
    // }

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
                            <button className={Styles.optionBtnIcon} onClick={() => deleteAddress(profileData?.user, item.id, index)}>Delete</button>
                            {item?.isDefault ? "" : <button className={Styles.optionBtnIcon}>Make Default</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}