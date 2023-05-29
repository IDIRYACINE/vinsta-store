'use client'

import { Button } from "@mui/material";
import clsx from "clsx";

interface BaseContainedButtonProps{
    className?:string;
    onClick?:()=>void;
    children?:React.ReactNode;
}

function BaseContainedButton(props:BaseContainedButtonProps){
    const className = clsx([props.className , "bg-purple-500"])

    return (
        <Button className={className} onClick={props.onClick} variant="contained">
            {props.children}
        </Button>
    )
}


export {BaseContainedButton}