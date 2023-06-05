"use client";

import { Button } from "@mui/material"
import clsx from "clsx";
import { useRouter } from 'next/navigation';
import { Panel } from "../domain/PanelEntity";


import { RootState,AppDispatch,} from "@adminapp/store";
import { useDispatch, useSelector ,TypedUseSelectorHook} from "react-redux";
import { setActivePanel } from "@adminapp/store/slices/navigationSlice";


 const useAppDispatch = () => useDispatch<AppDispatch>()
 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface SidebarButtonProps {
    panel: Panel;
}


export default function SidebarButton(props: SidebarButtonProps) {
    const selectedPanelId = useAppSelector(state => state.navigation.selectedId)
    const dispatch = useAppDispatch()

    const router = useRouter()

    const activeClassName = clsx([
        'w-full bg-purple-500 text-white'
    ])

    const passiveClassName = clsx([
        'w-full text-purple-500 hover:text-white'
    ])



    const isSelected = selectedPanelId.value === props.panel.id.value

    function handleClick() {
        dispatch(setActivePanel(props.panel.id))
        router.push(props.panel.path.value)
    }

    return (
        <Button onClick={handleClick} className={isSelected ? activeClassName : passiveClassName} variant="contained" >
            {props.panel.name.value}
        </Button>
    )
}

