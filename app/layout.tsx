'use client'

import { SessionProvider } from 'next-auth/react';
import './globals.css';

interface RootLayoutProps {
    children: React.ReactNode;

}

export default function RootLayout({
    children,
}: RootLayoutProps) {

    return (
        <html lang="en" >
            <body>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </body>
        </html>
    );


}