'use client'

import { useAppSelector } from "@vinstacore/store/clientHooks";
import { AppBar, Typography, Toolbar,  IconButton, Divider, Drawer } from '@mui/material';
import {  styled } from "@mui/material/styles";
import {ChevronLeft,Menu} from '@mui/icons-material';
import Sidebar from "../sidebar/ui/Sidebar";


interface NavbarProps {
    openDrawer: boolean,
    toggleDrawer: () => void,
    isSmallScreen: boolean,
}
export default function Navbar({openDrawer,toggleDrawer,isSmallScreen}: NavbarProps) {
    const panel = useAppSelector(state => state.adminNavigation.selectedPanel)
    


    const drawerWidth = isSmallScreen ? "100%" : "20%";
    const appbarPaddingLeft = (openDrawer && !isSmallScreen) ? drawerWidth : "0px";


    return (
        <div>
            <AppBar sx={{paddingLeft:appbarPaddingLeft}} position="fixed">

                <Toolbar color="white" className="flex flex-row justify-between md:justify-center">
                    
                        <IconButton
                            color="inherit"
                            onClick={toggleDrawer}
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton> 
                    <Typography variant="h6" >{panel.name.value}</Typography>
                    <div/>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <AppDrawer open={openDrawer} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth}/>
        </div>

    )
}


interface AppDrawerProps {
    open: boolean,
    toggleDrawer: () => void,
    drawerWidth : string,

}

function AppDrawer(props: AppDrawerProps) {

    const { open, toggleDrawer,drawerWidth } = props



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

            <Sidebar />
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
