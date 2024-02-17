'use client'
import Styles from '@/app/style/auth.module.css';
import Link from 'next/link';
import { useAppContext } from '../context/appContext';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {

    const router = useRouter();
    const [credencials, setCredencials] = useState({ email: '', password: '' });
    const [errorText, seterrorText] = useState('');
    // let errorText = '';

    const { setIsLogin } = useAppContext();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredencials({ ...credencials, [name]: value });
    }

    const handleLogin = async () => {
        const response = await fetch('http://127.0.0.1:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credencials),

        });

        if (response.status === 200) {
            const data = await response.json();
            const authtoken = data.authtoken;
            localStorage.setItem('auth-token', authtoken);
            router.push('/');
            setIsLogin(true);
        }
        else {
            const data = await response.json();
            // errorText = data.error;
            if(typeof(data.error) === 'object'){
                seterrorText ( 'Please fill all the credentials');
            }
            else{
                seterrorText(data.error);
            }
        }
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.boxContainer}>
                <h3>Login</h3>
                <input type="text" name="email" id="email" placeholder='Email' onChange={handleChange} value={credencials.email} />
                <input type="password" name="password" id="password" placeholder='Password' onChange={handleChange} value={credencials.password} />
                <button onClick={handleLogin}>Login</button>
                <p style={{ fontSize: '12px', 'color': 'red', }}>{errorText?`*${errorText}`:''}</p>
                <p>By continuing, you agree to Amazon&apos;s <Link href='/'>Contitions of Use</Link> and <Link href='/'>Privacy policy</Link></p>
            </div>

            <p className={Styles.hrText}>New to Amazon?</p>
            <Link href='/register'><button className={Styles.signUpBtn}>Create your Amazon Account</button></Link>
        </div>
    )
}