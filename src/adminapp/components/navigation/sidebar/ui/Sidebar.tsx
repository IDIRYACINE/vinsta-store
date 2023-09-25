'use client'

import clsx from "clsx"
import SidebarButton from "./SidebarButton"
import { useAppSelector } from "@vinstacore/store/clientHooks"
import { BaseContainedButton } from "@adminapp/components/commons/Buttons"
import { useRouter } from "next/navigation"

import LogoutIcon from '@mui/icons-material/Logout';
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddCardIcon from '@mui/icons-material/AddCard';
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

interface SidebarProps {
    toggleDrawer?: () => void
}
export default function Sidebar({ toggleDrawer }: SidebarProps) {

    const panels = useAppSelector(state => state.adminNavigation.panels)
    const router = useRouter()

    const icons = [AddCardIcon, ShoppingBagIcon, ReorderIcon, LogoutIcon]

    const className = clsx([
        'flex flex-col items-center justify-evenly py-4 px-0 ',
        'w-full h-full bg-primary'
    ])

    function Logout() {
        router.replace("/api/auth/logout")
        if (toggleDrawer) {
            toggleDrawer()

        }
    }


    return (
        <aside className={className}>
            <div className="flex flex-col gap-4 w-full">
            {
                panels.map((item, index) => {
                    return (<SidebarButton panel={item} key={index} toggleDrawer={toggleDrawer} Icon={icons[index]} ></SidebarButton>)
                })
            }
            </div>
            <Button onClick={Logout} variant="contained" className="w-full flex justify-start flex-row gap-4 hover:text-black">
                <LogoutIcon className='text-4xl fill-black' />
                <Typography variant='body1'>Logout</Typography>

            </Button>
        </aside>
    )
}