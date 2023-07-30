'use client';


import { AppBar, IconButton, Typography, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ClientRoutes } from '@vinstacore';
import { useRouter } from 'next/navigation';



export function Logo() {

    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Logo
            </Typography>
        </>
    )

}


export function Navbar() {

    const router = useRouter()

    const appBarStyle = {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-between",
    }


    function navigateToHome() {
        router.replace(ClientRoutes.home)

    }

    function navigateToCart() {
        router.replace(ClientRoutes.cart)
    }

    return (
        <AppBar position="fixed">
            <Toolbar sx={appBarStyle}>
                <IconButton onClick={navigateToHome}>
                    <Logo />
                </IconButton>
                <IconButton onClick={navigateToCart}>
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>

    )
}