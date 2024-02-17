import Styles from '@/app/style/auth.module.css';
import Link from 'next/link';
export default function LoginPage() {

    return (
        <div className={Styles.container}>
            <div className={Styles.boxContainer}>
                <h3>Create Account</h3>
                <input type="text" name="fname" id="" placeholder='First name' required/>
                <input type="text" name="lname" id="" placeholder='Last name' required/>
                <input type="text" name="email" id="" placeholder='Email' required/>
                <input type="number" name="number" id="" placeholder='Mobile number' />
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="password" name="conpass" id="" placeholder='Confirm password' required/>
                <button>Verify mobile number</button>
                <p>By continuing, you agree to Amazon&apos;s <Link href='/'>Contitions of Use</Link> and <Link href='/'>Privacy policy</Link></p>
            </div>

        </div>
    )
}