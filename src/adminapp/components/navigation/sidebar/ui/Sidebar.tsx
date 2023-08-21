'use client'

import clsx from "clsx"
import SidebarButton from "./SidebarButton"
import ActionButton from "./ActionButton"
import { useAppSelector } from "@adminapp/store/clientHooks"


export default function Sidebar() {

    const panels = useAppSelector(state => state.navigation.panels)

    const className = clsx([
        'flex flex-col items-center justify-between p-4 ',
        'w-64 h-full '
    ])


    return (
        <aside className={className}>
            {
                panels.map((item, index) => {
                    return (<SidebarButton panel={item} key={index}  ></SidebarButton>)
                })
            }
        </aside>
    )
}