'use client'
import { createContext, ReactNode, useContext,useState, useEffect  } from "react";

interface AddressItem {
    addressline:string;
    phone:number;
    district:string;
    stateName:string;
    pinCode:string;
}
interface ProfileData {
    _id:string;
    fname: string;
    lname:string;
    phone:string;
    country:string;
    countryCode:string;
    email:string;
    address:Array<AddressItem>;
    // Add other properties as needed
}
type AppContextType ={
    isLogin :boolean;
    setIsLogin:(loginStatus:boolean)=>void;
    profileData:ProfileData | null | undefined;

};


const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext(){
    const context = useContext(AppContext);
    if(context === undefined){
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};


type AppProviderProps = {
    children:ReactNode;
}


export function AppProvider({children}:AppProviderProps){

    const [isLogin, setIsLogin] = useState(false);
    const [profileData, setProfileData] = useState <ProfileData | null | undefined>()

    const getProfile = async () => {
        const authToken = localStorage.getItem('auth-token');
        if (!authToken) {
            // Handle the case where auth-token is not available
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:3000/api/auth/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': authToken,
                },
            });

            if (!response.ok) {
                // Handle non-OK response status here
                // Example: throw new Error('Failed to fetch profile data');
                throw new Error('Failed to fetch profile data');
            }

            const resData = await response.json();
            setProfileData(resData.data);
        } catch (error) {
            // Handle errors here (e.g., network errors, failed API response, etc.)
            console.error('Error fetching profile:', error);
        }
    };

    useEffect(() => {
 
        const authToken = localStorage.getItem("auth-token");
        setIsLogin(!!authToken); // setIsLogin based on authToken
        if(isLogin){
            getProfile();
        }
    }, [isLogin])
    

    const contextValue:AppContextType={
        isLogin,
        setIsLogin,
        profileData,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

};