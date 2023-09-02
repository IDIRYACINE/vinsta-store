'use client'

import TextField from '@mui/material/TextField';
import {  ChangeEvent, useState } from 'react';

interface AppTextFieldProps {
    label: string;
    onChange: (value: string) => void;
    className?: string;
    readOnly?: boolean;
    value?: string;

}

function AppTextField(props: AppTextFieldProps) {
    const { onChange, label, className } = props
    const [value, setValue] = useState<string>(props.value??"")

    const readOnly = props.readOnly ?? false

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value)
        setValue(event.target.value)
    }

    return (
        <TextField
        InputProps={{
            readOnly,
          }}
            className={className}
            label={label}
            value={value}
            onChange={handleChange}
        />
    )
}


interface AppTextAreaProps {
    label: string;
    value?: string;
    onChange: (value: string) => void;
    rowCount: number;
    className?: string;
}


function AppTextArea(props: AppTextAreaProps) {
    const { onChange, label,  rowCount,className } = props
    const [value, setValue] = useState<string>(props.value??"")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value)
        setValue(event.target.value)
    }

    return (
        <TextField
            className={className}
            label={label}
            value={value}
            multiline
            rows={rowCount}
            onChange={handleChange}
        />
    )
}




export { AppTextField,AppTextArea }