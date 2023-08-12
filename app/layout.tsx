'use client'

import './globals.css';
import { StoreLayout } from '@vinstastore/storefront';
import { AdminLayout } from '@vinstastore/vinstaadmin';
import { usePathname, } from 'next/navigation';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({
    children,
}: RootLayoutProps) {

    const pathname = usePathname();
    const isAdminPath = pathname?.includes ('admin') ??  false;

    const AppLayout = isAdminPath ? AdminLayout : StoreLayout;


    return (
        <html lang="en" >
            <body>
                <AppLayout>
                    {children}
                </AppLayout>
            </body>
        </html>
    );


}