'use client';


import { AppBar, IconButton, Typography, Toolbar, Tooltip, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeliveryIcon from '@mui/icons-material/DeliveryDining';
import { ClientRoutes } from '@vinstastore/vinstacore';
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


interface AppDeliveryButtonProps {
    onClick: () => void,
}
function AppDeliveryButton(props: AppDeliveryButtonProps) {
    const { onClick } = props



    return <IconButton onClick={onClick}>

        <DeliveryIcon color="secondary" />
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

    function navigateToDelivery() {
        router.replace(ClientRoutes.delivery)
    }

    return (
        <AppBar position="fixed">
            <Toolbar color="white" sx={appBarStyle}>
                <IconButton onClick={navigateToHome}>
                    <Logo />
                </IconButton>
                <Box className="flex flex-row justify-evenly">
                    <AppDeliveryButton onClick={navigateToDelivery} />
                    <AppCartButton onClick={navigateToCart} cartItemsCount={cartItemsCount} />

                </Box>
            </Toolbar>
        </AppBar>

    )
}