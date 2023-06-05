'use client'

import clsx from 'clsx';
import { ReactNode, } from 'react';
import Navbar from '@adminapp/components/navigation/appbar/Navbar';
import Sidebar from '@adminapp/components/navigation/sidebar/ui/Sidebar';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './AdminTheme';
import { Provider } from 'react-redux';
import { store } from '@adminapp/store';


interface LayoutProps {
    children: ReactNode;
}


function AdminLayout({ children }: LayoutProps) {

    const className = clsx([
        'flex flex-row flex-start w-full h-full fixed top-0 left-0',
    ])

    const contentClassName = clsx([
        'flex flex-col h-screen overflow-y-scroll w-full bg-gray-100'
    ])



    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Box className={className}>
                    <Sidebar />
                    <Box className={contentClassName}>
                        <Navbar />
                        <Box>
                            {children}
                        </Box>
                    </Box>
                </Box></Provider>
        </ThemeProvider>
    );
};



export { AdminLayout };

