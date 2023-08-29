'use client'

import clsx from "clsx"
import SidebarButton from "./SidebarButton"
import { useAppSelector } from "@vinstacore/store/clientHooks"
import { BaseContainedButton } from "@adminapp/components/commons/Buttons"
import { useRouter } from "next/navigation"


export default function Sidebar() {

    const panels = useAppSelector(state => state.adminNavigation.panels)
    const router = useRouter()

    const className = clsx([
        'flex flex-col items-center justify-between py-4 ',
        'w-full md:w-64 h-full '
    ])

    function Logout(){
        router.replace("/api/auth/logout")
    }


    return (
        <aside className={className}>
            {
                panels.map((item, index) => {
                    return (<SidebarButton panel={item} key={index}  ></SidebarButton>)
                })
            }
            <BaseContainedButton onClick={Logout} className="w-full">
                LOGOUT
            </BaseContainedButton>
        </aside>
    )
}