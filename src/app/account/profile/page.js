'use client'

import { useEffect, useState } from "react";

export default function Profile() {

    const [data, setData] = useState({});
    const getProfile = async () => {
        const response = await fetch('http://127.0.0.1:3000/api/auth/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            },

        });

        const resData = await response.json();
        setData(resData.data);


    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div>
            <h2>Profile name</h2>
            <h5>Fname: {data.fname}</h5>
            <h5>Lname:{data.lname}</h5>
            <h5>Email: {data.email}</h5>
            <h5>Password:xxxxxxx</h5>
            <h5>Phone: {`+${data.countryCode} ${data.phone}`}</h5>
            <h5>Address: {data.address.map((item,index)=>{
                <h5>{item}</h5>
            })}</h5>
        </div>
    )
}