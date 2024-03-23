'use client'
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { cookies } from "next/headers";
import axios from "axios";
interface AddressItem {
    id: string;
    addressline: string;
    phone: number;
    district: string;
    stateName: string;
    pinCode: string;
    city: string;
    isDefault: boolean;
}
interface ProfileData {
    user: string;
    fname: string;
    lname: string;
    phone: string;
    country: string;
    countryCode: string;
    email: string;
    address: Array<AddressItem>;
    // Add other properties as needed
}

interface CartProducts {
    id: string;
    productId: string;
    title: string;
    imageUrl: string;
    qty: number;
    price: number;
    proTotalPrice: number;
}
interface CartData {
    products: Array<CartProducts>;
    totalPrice: string;
    totalLength: number;
}
type AppContextType = {
    isLogin: boolean;
    setIsLogin: (loginStatus: boolean) => void;
    profileData: ProfileData | null | undefined;
    cartData: CartData | null | undefined;
    deleteAddress: (user: string, id: string, index: number) => void;
    handleDeleteCartProduct: (id: string) => void;
    hostUrl: string;
    RAZOR_KEY_ID :string;

};


const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};


type AppProviderProps = {
    children: ReactNode;
}


export function AppProvider({ children }: AppProviderProps) {

    const [isLogin, setIsLogin] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData | null | undefined>();
    const [cartData, setCartData] = useState<CartData | null | undefined>();

    // const hostUrl = "http://127.0.0.1:3000";
    // const hostUrl = "http://192.168.171.25:3000";
    // const hostUrl = "https://192.168.50.14:443";
    const hostUrl = "http://192.168.50.14:3000";

   const  RAZOR_KEY_ID = "rzp_test_Dn6sckSxHlsyXL";

    // Get profile data

    const getProfile = async () => {
        const authToken = localStorage.getItem('auth-token');
        if (!authToken) {
            // Handle the case where auth-token is not available
            return;
        }

        try {
            const response = await axios.get(`${hostUrl}/api/auth/profile`, {
                method: 'GET',
               withCredentials:true,
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': authToken,
                },
            });

            if (!response) {
                // Handle non-OK response status here
                // Example: throw new Error('Failed to fetch profile data');
                throw new Error('Failed to fetch profile data');
            }

            // const resData = await response.json();
            const resData = await response.data;
            setProfileData(resData.data);
        } catch (error) {
            // Handle errors here (e.g., network errors, failed API response, etc.)
            console.error('Error fetching profile:', error);
        }
    };



    // Delete address

    const deleteAddress = async (user: string, id: string, index: number) => {
        try {
            // Make the API call to delete the address

            // Assuming API call to delete the address is successful

            const response = await fetch(`${hostUrl}/api/auth/deleteaddress/?id=${id}`, {
                method: 'delete',
                headers: {
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                },
                credentials:'include',
            });

            const data = await response.json();

            if (response.status === 200) {
                if (profileData && profileData.address) {
                    const updatedProfileData = { ...profileData };
                    updatedProfileData.address = updatedProfileData.address.filter((address) => address.id !== id);
                    setProfileData(updatedProfileData);

                    console.log(`Successfully deleted address: ${index} by: ${user} and id: ${id}`);

                }
            }
            else {
                console.error('Profile data or address is undefined');
            }
        } catch (error) {
            console.error('Error deleting address:', error);
        }
    }

    //  get cart data

    const getCartProducts = async () => {
        const authToken = localStorage.getItem('auth-token');
        if (!authToken) {
            // Handle the case where auth-token is not available
            return;
        }

        try {
            const response = await fetch(`${hostUrl}/api/product/cartproduct`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': authToken,
                },
                credentials:'include',

                cache:'no-cache',
            });

            if (!response.ok) {
                // Handle non-OK response status here
                // Example: throw new Error('Failed to fetch profile data');
                throw new Error('Failed to fetch profile data');
            }

            const resData = await response.json();
            setCartData(resData);
        } catch (error) {
            // Handle errors here (e.g., network errors, failed API response, etc.)
            console.error('Error fetching profile:', error);
        }
    }

    // Delete cart data

    const handleDeleteCartProduct = async (id: string) => {
        try {
            if (cartData) {
                const response = await fetch(`${hostUrl}/api/product/deletecart?cartId=${id}`, {
                    method: "DELETE",
                    headers: {
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                    },
                    credentials:'include',
                });

                if (!response.ok) {
                    // Handle unsuccessful deletion (perhaps show an error message)
                    throw new Error('Failed to delete product from cart');
                }

                const responseData = await response.json();
                const updatedCartData = { ...cartData };
                updatedCartData.products = updatedCartData.products.filter((product) => product.id !== id);

                // Recalculate total price and total length after deletion
                updatedCartData.totalPrice = calculateTotalPrice(updatedCartData.products);
                updatedCartData.totalLength = calculateTotalLength(updatedCartData.products);

                setCartData(updatedCartData);

                console.log(`Successfully deleted product: ${id}`);
            } else {
                console.error('Product not found');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };


    // 
    // Function to calculate total price
    const calculateTotalPrice = (products: CartProducts[]): string => {
        const totalPrice = products.reduce((acc, product) => {
            return acc + product.proTotalPrice;
        }, 0);
        return totalPrice.toString(); // Assuming totalPrice is a string in your CartData interface
    };

    // Function to calculate total length (total quantity of items in the cart)
    const calculateTotalLength = (products: CartProducts[]): number => {
        const totalQty = products.reduce((acc, product) => {
            return acc + product.qty;
        }, 0);
        return totalQty; // Return the total quantity as a string
    };

    useEffect(() => {

        const authToken = localStorage.getItem("auth-token");
        setIsLogin(!!authToken); // setIsLogin based on authToken
        if (isLogin) {
            getProfile();
            getCartProducts();
        }
    }, [isLogin])


    const contextValue: AppContextType = {
        isLogin,
        setIsLogin,
        profileData,
        cartData,
        deleteAddress,
        handleDeleteCartProduct,
        hostUrl,
        RAZOR_KEY_ID,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

};