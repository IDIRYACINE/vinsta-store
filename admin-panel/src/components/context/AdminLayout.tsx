import clsx from 'clsx';
import { ReactNode, } from 'react';
import Navbar from '@admin/components/navigation/appbar/Navbar';
import Sidebar from '@admin/components/navigation/sidebar/ui/Sidebar';
import {AdminContextProvider} from './AppContext';
import { Box, ThemeProvider } from '@mui/material';
import {theme} from './AdminTheme';

interface LayoutProps {
    children: ReactNode;
}


const AdminLayout = ({ children }: LayoutProps) => {
    const className = clsx([
        'flex flex-row flex-start w-full h-full fixed top-0 left-0',
    ])

    const contentClassName = clsx([
        'flex flex-col w-full bg-gray-100'
    ])


    return (
        <AdminContextProvider>
            <ThemeProvider theme={theme}>
            <Box className={className}>
                <Sidebar />
                <Box className={contentClassName}>
                    <Navbar />
                    <Box>
                    {children}
                    </Box>
                </Box>
            </Box></ThemeProvider>
        </AdminContextProvider>
    );
};

export { AdminLayout };
