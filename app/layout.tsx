'use client'

import './globals.css';
import { StoreLayout } from '@storefront';
import { AdminLayout } from '@adminapp';
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