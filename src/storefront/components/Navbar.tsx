'use client';


import { AppBar, IconButton, Divider, Typography, Toolbar, Drawer, Box, Badge, useMediaQuery,  } from '@mui/material';
import { useTheme, styled } from "@mui/material/styles";
import { ShoppingCart, Menu, DeliveryDining, ChevronLeft } from '@mui/icons-material';
import { ClientRoutes, IProductFilter } from '@vinstacore/index';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch,  } from '@vinstacore/store/clientHooks';
import { setProductFilters } from '@vinstacore/store/customer/slices/productsSlice';
import {cartItemsCountSelector} from '@vinstacore/store/selectors'
import { useState } from 'react';
import { ProductFilterSearch } from './Filters';
import Logo from '@common/Logo';

interface AppDrawerProps {
    open: boolean,
    toggleDrawer: () => void,

}
function AppDrawer(props: AppDrawerProps) {

    const { open, toggleDrawer } = props

    const drawerWidth = "100%";

    const dispatch = useAppDispatch()


    const filters = useAppSelector(state => state.customerProducts.filters)

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
                    <ChevronLeft />
                </IconButton>
            </DrawerHeader>
            <Divider />

            <ProductFilterSearch {...productFilterProps} />
        </Drawer>
    )
}

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


interface AppCartButtonProps {
    onClick: () => void,
    cartItemsCount: number
}
function AppCartButton(props: AppCartButtonProps) {
    const { onClick, cartItemsCount } = props



    return <IconButton onClick={onClick}>
        <Badge badgeContent={String(cartItemsCount)} color="error">

            <ShoppingCart color="secondary" />
        </Badge>
    </IconButton>
}


interface AppDeliveryButtonProps {
    onClick: () => void,
}
function AppDeliveryButton(props: AppDeliveryButtonProps) {
    const { onClick } = props



    return <IconButton onClick={onClick}>

        <DeliveryDining color="secondary" />
    </IconButton>
}


export function Navbar() {

    const router = useRouter()
    const cartItemsCount = useAppSelector(state => cartItemsCountSelector(state))
    const [openDrawer, setDrawerState] = useState(false);

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"))



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
        <>

            <AppBar position="fixed">
                <Toolbar color="white" className="flex flex-row justify-between">
                    {isSmallScreen ?
                        <IconButton
                            color="inherit"
                            onClick={toggleDrawer}
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton> : null
                    }

                    <IconButton onClick={navigateToHome}>
                        <Logo color="#ffffff"/>
                    </IconButton>
                    <Box className="flex flex-row justify-evenly">
                        <AppDeliveryButton onClick={navigateToDelivery} />
                        <AppCartButton onClick={navigateToCart} cartItemsCount={cartItemsCount} />

                    </Box>
                </Toolbar>
            </AppBar>

            <AppDrawer open={openDrawer} toggleDrawer={toggleDrawer} />
            <Toolbar/>

        </>

    )
}