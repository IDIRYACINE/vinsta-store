"use client";

import { adminContext } from "@adminapp/components/context/AppContext";
import { Button } from "@mui/material"
import clsx from "clsx";
import { observer } from "mobx-react"
import NavigationState from "@adminapp/components/navigation/sidebar/state/State";
import { useRouter } from 'next/navigation';
import {PanelEntity} from "../domain/PanelEntity";


interface SidebarButtonProps  {
    panel: PanelEntity;
}

type ViewProps = {
    state: NavigationState
}

export default function SidebarButton(props: SidebarButtonProps) {
    const { navState } = adminContext

    const router = useRouter()

    const activeClassName = clsx([
        'w-full bg-purple-500 text-white'
    ])

    const passiveClassName = clsx([
        'w-full text-purple-500 hover:text-white'
    ])



    const View = observer((viewProps: ViewProps) => {
        const isSelected = viewProps.state.getCurrentIndex() === props.panel.id.value

        function handleClick() {
            viewProps.state.setCurrentIndex(props.panel.id.value)
            router.push(props.panel.path.value)
        }

        return (
            <Button onClick={handleClick} className={isSelected ? activeClassName : passiveClassName} variant="contained" >
                {props.panel.name.value}
            </Button>
        )
    })


    return <View state={navState} />
}