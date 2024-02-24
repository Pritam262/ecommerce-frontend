'use client'

import {useEffect, useState } from "react"
import { useAppContext } from '@/app/context/appContext';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddAddress() {

    const hostUrl = process.env.SERVER_IP;
    const router = useRouter();
    const { isLogin } = useAppContext();

    const [address, setAddress] = useState({ addressline: "", phone: "", pinCode: "", district: "", stateName: "", city: "", landmark: "" });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
    }

    const addAddress = async () => {
        const response = await fetch(`${hostUrl}/api/auth/addaddress`, {
            method: "post",
            headers: {
                'Content-Type':'application/json',
                'auth-token': `${localStorage.getItem('auth-token')}`
            },
            body: JSON.stringify(address),
        });

        if(response.status === 200){

            toast.success('Address add Successfully', {
                position:"top-center",
                autoClose:5000,
            })
            const data = await response.json();
        }
        else{
            toast.error('Address is not add', {
                position:"top-center",
                autoClose:5000,
            })
        }
    }
    useEffect(() => {

        if (!isLogin) {
            router.push('/login')
        }
        else {
            router.push('/account/profile/address/addaddress');
        }
    }, [isLogin])

    return (
        <div>
            <input type="text" name="addressline" value={address.addressline} id="" placeholder="Address line" onChange={onChange} style={{ padding: '.5rem' }} />
            <input type="number" name="phone" id="" value={address.phone} placeholder="Phone" onChange={onChange} style={{ padding: '.5rem' }} />
            <input type="text" name="pinCode" id="" value={address.pinCode} placeholder="Pin Code" onChange={onChange} style={{ padding: '.5rem' }} />
            <input type="text" name="district" id="" value={address.district} placeholder="District" onChange={onChange} style={{ padding: '.5rem' }} />
            <input type="text" name="stateName" id="" value={address.stateName} placeholder="State" onChange={onChange} style={{ padding: '.5rem' }} />
            <input type="text" name="city" id="" value={address.city} placeholder="City" onChange={onChange} style={{ padding: '.5rem' }} />
            <input type="text" name="landmark" id="" value={address.landmark} placeholder="Landmark" onChange={onChange} style={{ padding: '.5rem' }} />

            <button onClick={addAddress}>Submit</button>
            <ToastContainer/>
        </div>
    )
}