'use client';


import { AppBar, Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



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

    const appBarStyle = {
        display: "flex",
        "flexDirection": "row",
        "justifyContent": "space-between",
        "padding": "1rem",
    }

    return (
        <AppBar sx={appBarStyle}>
            <Logo />
            <ShoppingCartIcon />
        </AppBar>
    )
}