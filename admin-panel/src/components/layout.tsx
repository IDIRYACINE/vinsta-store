import clsx from 'clsx';
import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from './navigation/appbar/navbar';
import Sidebar from './navigation/sidebar/sidebar';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const className = clsx([
        'flex flex-row flex-start  w-full h-full fixed top-0 left-0',
    ])

    const contentClassName = clsx([
        'flex flex-col w-full'
    ])

    return (
        <>
            <Head>
            </Head>
            <div className={className}>
                <Sidebar />

                <div className={contentClassName}>
                    <Navbar />
                    {children}
                </div>
            </div>

        </>
    );
};

export default Layout;
