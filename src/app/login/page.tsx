import Styles from '@/app/style/auth.module.css';
import Link from 'next/link';
export default function LoginPage() {

    return (
        <div className={Styles.container}>
            <div className={Styles.boxContainer}>
                <h3>Login</h3>
                <input type="text" name="email" id="" placeholder='Email' />
                <input type="text" name="password" id="" placeholder='Password' />
                <button>Continue</button>
                <p>By continuing, you agree to Amazon's <Link href='/'>Contitions of Use</Link> and <Link href='/'>Privacy policy</Link></p>
            </div>

            <p className={Styles.hrText}>New to Amazon?</p>
            <Link href='/register'><button className={Styles.signUpBtn}>Create your Amazon Account</button></Link>
        </div>
    )
}