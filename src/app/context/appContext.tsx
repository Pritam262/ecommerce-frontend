'use client'
import { createContext, ReactNode, useContext,useState, useEffect  } from "react";


type AppContextType ={
    isLogin :boolean;
    setIsLogin:(loginStatus:boolean)=>void;

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

    useEffect(() => {
 
        const authToken = localStorage.getItem("auth-token");
        setIsLogin(!!authToken); // setIsLogin based on authToken
    }, [isLogin])
    

    const contextValue:AppContextType={
        isLogin,
        setIsLogin,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

};