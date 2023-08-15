'use client';


import { AppBar, IconButton, Divider, Typography, Toolbar, Drawer, Tooltip, Box, Badge, useMediaQuery, useTheme, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeliveryIcon from '@mui/icons-material/DeliveryDining';
import MenuIcon from '@mui/icons-material/Menu';
import { ClientRoutes, IProductFilter } from '@vinstastore/vinstacore';
import { useRouter } from 'next/navigation';
import { cartItemsCountSelector, useAppSelector, useAppDispatch, setProductFilters } from '@storefront/store';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ProductFilterSearch } from './Filters';

interface AppDrawerProps {
    open: boolean,
    toggleDrawer: () => void,

}
function AppDrawer(props: AppDrawerProps) {

    const { open, toggleDrawer } = props
    const drawerWidth = "100%";

    const dispatch = useAppDispatch()


    const filters = useAppSelector(state => state.products.filters)

    function onFilterChange(newFilters: IProductFilter[]) {
        dispatch(setProductFilters(newFilters))
    }

    const productFilterProps = {
        onFilterChange: onFilterChange,
        className: "flex-initial w-full left-0 bottom-0",
        filters: filters,
    }

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
            </IconButton>
            </DrawerHeader>
            <Divider />

            <ProductFilterSearch {...productFilterProps} />
        </Drawer>
    )
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

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
    const [openDrawer, setDrawerState] = useState(false);

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

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

    const toggleDrawer = () => {
        setDrawerState(!openDrawer);
    };



    return (
        <div>
            <AppBar position="fixed">
                <Toolbar color="white" sx={appBarStyle}>
                    {isSmallScreen ?
                        <IconButton
                            color="inherit"
                            onClick={toggleDrawer}
                            edge="start"
                            sx={{ mr: 2}}
                        >
                            <MenuIcon />
                        </IconButton> : null
                    }

                    <IconButton onClick={navigateToHome}>
                        <Logo />
                    </IconButton>
                    <Box className="flex flex-row justify-evenly">
                        <AppDeliveryButton onClick={navigateToDelivery} />
                        <AppCartButton onClick={navigateToCart} cartItemsCount={cartItemsCount} />

                    </Box>
                </Toolbar>
            </AppBar>

            <Toolbar />
            <AppDrawer open={openDrawer} toggleDrawer={toggleDrawer}/>
        </div>

    )
}