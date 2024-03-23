import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import isAuthenticated from './utils/auth';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isAuthenticate = isAuthenticated();

    if (!isAuthenticate) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/account/:path*',

    ],
} 