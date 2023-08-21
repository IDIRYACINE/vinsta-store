'use client'

import clsx from 'clsx';
import { ReactNode, } from 'react';
import Navbar from 'src/adminapp/components/navigation/appbar/Navbar';
import { Box,useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './AdminTheme';
import { Provider } from 'react-redux';
import { store } from '@adminapp/store';
import { useState } from "react";
import { UserProvider } from '@auth0/nextjs-auth0/client';


interface LayoutProps {
    children: ReactNode;
}


function AdminLayout({ children }: LayoutProps) {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
    const [openDrawer, setDrawerState] = useState(isSmallScreen? false : true);

    const className = clsx([
        'flex flex-row flex-start w-full h-full fixed top-0 left-0',
    ])

    const contentClassName = clsx([
        'flex flex-col h-screen overflow-y-scroll w-full bg-gray-100'
    ])


    const toggleDrawer = () => {
        setDrawerState(!openDrawer);
    };

    const navbarProps = {
        openDrawer: openDrawer,
        toggleDrawer: toggleDrawer,
        isSmallScreen: isSmallScreen,
    }

    const contentPaddingLeft = (openDrawer && !isSmallScreen) ? "20%" : "0px";


    return (
        <UserProvider>

        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Box className={className}>
                    <Box className={contentClassName}>
                        <Navbar {...navbarProps} />
                        <Box sx={{paddingLeft:contentPaddingLeft}}>
                            {children}
                        </Box>
                    </Box>
                </Box>
            </Provider>
        </ThemeProvider>
        </UserProvider>

    );
};



export { AdminLayout };

