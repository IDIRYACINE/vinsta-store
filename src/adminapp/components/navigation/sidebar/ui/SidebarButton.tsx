"use client";

import { setActivePanel } from "@adminapp/store";
import { useAppDispatch, useAppSelector } from "@adminapp/store/clientHooks";
import { Button } from "@mui/material"
import clsx from "clsx";
import { useRouter } from 'next/navigation';
import { Panel } from "@vinstacore/index";



interface SidebarButtonProps {
    panel: Panel;
}


export default function SidebarButton(props: SidebarButtonProps) {
    const selectedPanelId = useAppSelector(state => state.navigation.selectedId)
    const dispatch = useAppDispatch()

    const router = useRouter()

    const activeClassName = clsx([
        'w-full  text-white'
    ])

    const passiveClassName = clsx([
        'w-full hover:text-white'
    ])



    const isSelected = selectedPanelId.value === props.panel.id.value

    function handleClick() {
        dispatch(setActivePanel(props.panel.id))
        router.replace(props.panel.path.value)
    }

    return (
        <Button onClick={handleClick} className={isSelected ? activeClassName : passiveClassName} variant="contained" >
            {props.panel.name.value}
        </Button>
    )
}

