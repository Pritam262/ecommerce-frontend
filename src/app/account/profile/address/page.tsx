'use client'
import { useAppContext } from "@/app/context/appContext";
import Styles from '@/app/style/account.module.css';
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Address() {
    const { profileData } = useAppContext();
    const editAddress = (id: string, index: number) => {
        console.log("Update product", id, "Index", index);
    }
    const deleteAddress = (id: string, index: number) => {
        console.log("Delete product", id, "Index", index);
    }

    return (
        <div className={Styles.addressPage}>
            <p className={Styles.heading}>Your addresses :</p>
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
                            <FaEdit className={Styles.optionBtnIcon} onClick={() => editAddress(profileData?._id, index)} />
                            <MdOutlineDelete className={Styles.optionBtnIcon} onClick={() => deleteAddress(profileData?._id, index)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}