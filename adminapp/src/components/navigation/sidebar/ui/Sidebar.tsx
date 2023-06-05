'use client'

import clsx from "clsx"
import SidebarButton from "./SidebarButton"
import ActionButton from "./ActionButton"


import { RootState,AppDispatch,} from "@adminapp/store";
import { useDispatch, useSelector ,TypedUseSelectorHook} from "react-redux";


 const useAppDispatch = () => useDispatch<AppDispatch>()
 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function Sidebar() {

    const panels = useAppSelector(state => state.navigation.panels)

    const className = clsx([
        'flex flex-col items-center justify-between p-4 ',
        'w-64 h-full '
    ])


    return (
        <aside className={className}>
            <ActionButton/>
            {
                panels.map((item, index) => {
                    return (<SidebarButton panel={item} key={index}  ></SidebarButton>)
                })
            }
        </aside>
    )
}