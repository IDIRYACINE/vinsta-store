"use client";

import { setActivePanel } from "@vinstacore/store/admin/slices/navigationSlice";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import clsx from "clsx";
import { useRouter } from 'next/navigation';
import { Panel } from "@vinstacore/index";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";



interface SidebarButtonProps {
    panel: Panel;
    toggleDrawer?: () => void
    Icon: typeof SvgIcon
}


export default function SidebarButton(props: SidebarButtonProps) {
    const selectedPanelId = useAppSelector(state => state.adminNavigation.selectedId)
    const dispatch = useAppDispatch()
    const { toggleDrawer, Icon } = props
    const router = useRouter()

    const isSelected = selectedPanelId.value === props.panel.id.value

    const className = clsx([
        'w-full  flex justify-start flex-row gap-4 hover:text-black ',
        isSelected ? 'text-black bg-white ' : null
    ])

    const iconClassName = clsx([
        'text-4xl fill-primary',
    ])


    const buttonProps = {
        onClick: handleClick,
        className: className,
    }
    function handleClick() {
        dispatch(setActivePanel(props.panel.id))
        router.replace(props.panel.path.value)
        if (toggleDrawer) {
            toggleDrawer()

        }
    }

    return (
        <Button variant="contained" {...buttonProps} >
            <Icon className={iconClassName}/>
            <Typography variant='body1'>{props.panel.name.value}</Typography>

        </Button >
    )
}

