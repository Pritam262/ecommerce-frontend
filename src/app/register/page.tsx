'use client'
import Styles from '@/app/style/auth.module.css';
import Link from 'next/link';
import { useAppContext } from '../context/appContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function LoginPage() {

const {hostUrl} = useAppContext()
const router = useRouter();

const [credencials, setCredencials] = useState({fname:'', lname:'', email:'', number:'', password:'', conpass:''});

const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setCredencials({...credencials, [e.target.name]:e.target.value})
}
    const handleRegister = async ()=>{
        try {
            
            const response = await fetch(`${hostUrl}/api/auth/register`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(credencials)
            });
            
            const resData = await response.json();
            
            if(response.ok){
                router.push(`/verifymobile?id=${resData?.id}`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.boxContainer}>
                <h3>Create Account</h3>
                <input type="text" name="fname" id="" placeholder='First name' required onChange={handleInputChange} value={credencials.fname}/>
                <input type="text" name="lname" id="" placeholder='Last name' required onChange={handleInputChange} value={credencials.lname}/>
                <input type="text" name="email" id="" placeholder='Email' required onChange={handleInputChange} value={credencials.email}/>
                <input type="number" name="number" id="" placeholder='Mobile number' onChange={handleInputChange} value={credencials.number}/>
                <input type="password" name="password" id="" placeholder='Password' required onChange={handleInputChange} value={credencials.password}/>
                <input type="password" name="conpass" id="" placeholder='Confirm password' required onChange={handleInputChange} value={credencials.conpass}/>
                <button onClick={handleRegister}>Verify mobile number</button>
                <p>By continuing, you agree to Ecommerce&apos;s <Link href='/'>Contitions of Use</Link> and <Link href='/'>Privacy policy</Link></p>
            </div>
            <Link href='/login'><button className={Styles.signUpBtn}>Login your Ecommerce Account</button></Link>
        </div>
    )
}