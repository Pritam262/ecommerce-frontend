'use client'

import { cookies } from "next/headers";

export default function isAuthenticated() {


    const isLogin = cookies().get('authtoken')?.value ;


    // console.log(cookies().get('authtoken'))

    // const authtoken = localStorage.getItem('auth-token');

    if (isLogin) {
        return true;
    }
    else {
        return false;
    }
}
