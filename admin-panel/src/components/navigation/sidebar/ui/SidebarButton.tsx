import { AdminAppContext } from "@admin/components/context/AppContext";
import { Button } from "@mui/material"
import clsx from "clsx";
import { useContext } from "react";
import { observer } from "mobx-react"
import NavigationState from "@admin/components/navigation/sidebar/logic/State";
import router from "next/dist/client/router";
import {PanelEntity} from "../domain/PanelEntity";


interface SidebarButtonProps  {
    panel: PanelEntity;
}

type ViewProps = {
    state: NavigationState
}

export default function SidebarButton(props: SidebarButtonProps) {
    const { navState } = useContext(AdminAppContext)


    const activeClassName = clsx([
        'w-full bg-blue-500 text-white'
    ])

    const passiveClassName = clsx([
        'w-full text-blue-500 hover:text-white'
    ])



    const View = observer((viewProps: ViewProps) => {
        const isSelected = viewProps.state.getCurrentIndex() === props.panel.id.value

        function handleClick() {
            viewProps.state.setCurrentIndex(props.panel.id.value)
            console.log(props.panel.path.value)
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