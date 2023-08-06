'use client';


import { AppBar, IconButton, Typography, Toolbar, Tooltip, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ClientRoutes } from '@vinstacore';
import { useRouter } from 'next/navigation';
import { cartItemsCountSelector, useAppSelector } from '@storefront/store';



export function Logo() {

    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Logo
            </Typography>
        </>
    )

}

interface AppCartButtonProps {
    onClick: () => void,
    cartItemsCount: number
}
function AppCartButton(props: AppCartButtonProps) {
    const { onClick, cartItemsCount } = props



    return <IconButton onClick={onClick}>
        <Badge badgeContent={String(cartItemsCount)} color="error">

            <ShoppingCartIcon color="secondary" />
        </Badge>
    </IconButton>
}


export function Navbar() {

    const router = useRouter()
    const cartItemsCount = useAppSelector(state => cartItemsCountSelector(state))

    const appBarStyle = {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-between",
    }

    function navigateToCart() {
        router.replace(ClientRoutes.cart)
    }

    function navigateToHome() {
        router.replace(ClientRoutes.home)

    }

    return (
        <AppBar position="fixed">
            <Toolbar color="white" sx={appBarStyle}>
                <IconButton onClick={navigateToHome}>
                    <Logo />
                </IconButton>
                <AppCartButton onClick={navigateToCart} cartItemsCount={cartItemsCount} />
            </Toolbar>
        </AppBar>

    )
}