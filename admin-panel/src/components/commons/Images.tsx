import { Box, TextField } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { ChangeEvent } from "react";


interface SingleImageFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

function SingleImageField(props:SingleImageFieldProps){
    const { onChange, label, value } = props

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value)
    }

    const className = clsx([props.className , "w-full"])

    return (
        <Box>
        <TextField
            className={className}
            label={label}
            value={value}
            onChange={handleChange}
        />

        <Image height="200" width="200" src={value} alt="preview"/>

        </Box>
    )
}




export {SingleImageField}