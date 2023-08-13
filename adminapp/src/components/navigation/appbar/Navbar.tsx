'use client'

import { useAppSelector } from "@adminapp/store/clientHooks";
import { AppBar, Typography, Toolbar } from '@mui/material';

export default function Navbar() {
    const panel = useAppSelector(state => state.navigation.selectedPanel)


    return (
        <div>
        <AppBar position="fixed">
            <Toolbar color="white" >
                <Typography variant="h6" >{panel.name.value}</Typography>
            </Toolbar>
        </AppBar>
        <Toolbar/>
        </div>

    )
}
