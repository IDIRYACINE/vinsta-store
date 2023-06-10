'use client'

import { Typography } from "@mui/material"
import clsx from "clsx"
import { useAppSelector } from "@adminapp/store/clientHooks";

export default function Navbar() {

    const panel = useAppSelector(state => state.navigation.selectedPanel)

    const className = clsx([
        'flex-row p-4 flex-start justify-between bg-purple-500 text-white',
        'w-full h-16 ',
    ])



    return (
        <nav className={className}>
            <Typography variant="h5">{panel.name.value}</Typography>
        </nav>
    )
}