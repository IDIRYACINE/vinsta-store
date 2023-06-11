'use client'

import './globals.css';
import { StoreLayout } from '@storefront';

interface RootLayoutProps {
    children: React.ReactNode;

}

export default function RootLayout({
    children,
}: RootLayoutProps) {

    return (
        <html lang="en" >
            <body>
                <StoreLayout>
                    {children}
                </StoreLayout>
            </body>
        </html>
    );


}