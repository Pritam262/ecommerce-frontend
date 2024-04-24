'use client'
import Styles from '@/app/style/auth.module.css';
import { useAppContext } from '@/app/context/appContext';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function VerifyPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    const router = useRouter();

    const { hostUrl, setIsLogin } = useAppContext();

    const [otp, setOtp] = useState('');
    const registerUser = async () => {
        const response = await fetch(`${hostUrl}/api/auth/verifymobile`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                id: String(searchParams?.id),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(otp),
        });
        const resData = await response.json();
        if (response.status === 200) {
            localStorage.setItem('authtoken', resData.authtoken);
            setIsLogin(true);
            router.push('/');

        }
    }
    return <div className={Styles.container}>
        <div className={Styles.boxContainer}>
            <h3>Verify mobile</h3>
            <input type="text" name="otp" placeholder='OTP' required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)} value={otp} />

            <button onClick={registerUser}>Register</button>

        </div>
    </div>
}