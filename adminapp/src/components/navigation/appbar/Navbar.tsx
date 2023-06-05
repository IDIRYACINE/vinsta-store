'use client'

import { Typography } from "@mui/material"
import clsx from "clsx"

import { RootState,AppDispatch,} from "@adminapp/store";
import { useDispatch, useSelector ,TypedUseSelectorHook} from "react-redux";


 const useAppDispatch = () => useDispatch<AppDispatch>()
 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default function Navbar() {

    const panel = useAppSelector(state => state.navigation.selectedPanel)

    const className = clsx([
        'flex-row p-4 flex-start justify-between bg-blue-500 text-white',
        'w-full h-16 ',
    ])



    return (
        <nav className={className}>
            <Typography variant="h5">{panel.name.value}</Typography>
        </nav>
    )
}