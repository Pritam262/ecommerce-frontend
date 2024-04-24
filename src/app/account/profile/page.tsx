'use client'


import { useAppContext } from "@/app/context/appContext";
import Styles from '@/app/style/account.module.css';
// import { MdOutlineDelete } from "react-icons/md"; 
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Profile() {

    const { profileData, hostUrl } = useAppContext();
    const router = useRouter();

    // const [data, setData] = useState({});
    // const getProfile = async () => {
    //     const response = await fetch('http://127.0.0.1:3000/api/auth/profile', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'auth-token': localStorage.getItem('auth-token')
    //         },

    //     });

    //     const resData = await response.json();
    //     setData(resData.data);


    // }

    // useEffect(() => {
    //     getProfile()
    // }, [])


    const userLogout = async () => {
        try {
            const response = await fetch(`${hostUrl}/api/auth/logout`, { credentials: 'include', method: 'GET' });

            if (response.ok) {
                localStorage.removeItem('auth-token');
                router.push('/');
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={Styles.profileContainer}>
            <p>Name: {profileData?.fname} {profileData?.lname}</p>
            <p>Email: {profileData?.email}</p>
            <span style={{ display: 'flex', alignItems: 'center' }}><p>Password:xxxxxxx</p> <FaEdit style={{ marginLeft: '10px' }} /></span>
            <p>Phone: {`+${profileData?.countryCode} ${profileData?.phone}`}</p>

            <button className={Styles.btn} onClick={()=> userLogout()}>Logout</button>
        </div>
    )
}