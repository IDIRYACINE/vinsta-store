import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// import { authOptions } from "./pages/api/auth/[...nextauth]"

export async function middleware(request: NextRequest) {


    const isValidSession = true

    if (!isValidSession) {
        return NextResponse.redirect(new URL('/login', request.url));
    }



}

export const config = {
    matcher: ['/admin/:path*', '/admin'],
};





// export default withAuth(

//     function middleware(request: NextRequestWithAuth) {

//         if (request.nextauth.token?.role !== "admin") {
//             return NextResponse.redirect(new URL('/admin', request.url));

//         }

//     },
//     {
//         callbacks: {
//             authorized: ({ token }) => token?.role === "admin",
//         },
//     }
// )

// export const config = {
//     matcher: ['/admin/:path*'],
//     callbacks: {
//         authorized({ req, token }) {
//             if (token) return true
//         }
//     }
// };