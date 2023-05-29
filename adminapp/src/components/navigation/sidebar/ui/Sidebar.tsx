'use client'

import clsx from "clsx"
import SidebarButton from "./SidebarButton"
import Panels from "../domain/PanelEntity"
import ActionButton from "./ActionButton"



export default function Sidebar() {
    console.log("client side")
    const className = clsx([
        'flex flex-col items-center justify-between p-4 ',
        'w-64 h-full '
    ])


    return (
        <aside className={className}>
            <ActionButton/>
            {
                Panels.map((item, index) => {
                    return (<SidebarButton panel={item} key={index}  ></SidebarButton>)
                })
            }
        </aside>
    )
}