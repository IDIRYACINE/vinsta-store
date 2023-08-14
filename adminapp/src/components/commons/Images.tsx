'use client'

import { Box, TextField } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { ChangeEvent } from "react";
import { BaseContainedButton } from "@adminapp/components/commons/Buttons";


interface SingleImageFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

function SingleImageField(props: SingleImageFieldProps) {
    const { onChange, label, value } = props

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value)
    }

    const className = clsx([props.className, "w-full"])

    return (
        <Box>
            <TextField
                className={className}
                label={label}
                value={value}
                onChange={handleChange}
            />

            <Image height="200" width="200" src={value} alt="preview" />

        </Box>
    )
}



interface ImageManagerProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    onAdd: () => void;
    images: string[];
    onDeleteImage: (index: number) => void;
}

function ImageManager(props: ImageManagerProps) {
    const { onChange, label, value, onDeleteImage, images, onAdd } = props

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value)
    }

    function handleDelete(id: number) {
        onDeleteImage(id)
    }

    const className = clsx([props.className, "w-full mr-2"])

    return (
        <Box>

            <Box className="flex flex-row justify-between">
                <TextField
                    className={className}
                    label={label}
                    value={value}
                    onChange={handleChange}
                />

                <BaseContainedButton onClick={onAdd} >Add</BaseContainedButton>

            </Box>

            <Box >
                <Image height="200" width="200" src={value} alt="preview" />

                <Box className="flex flex-row justify-center overflow-x-auto">
                    {images.map((image, index) => {
                        return (
                            <ContainedImage key={index} url={image} onDelete={() => handleDelete(index)} />
                        )
                    },)
                    }
                </Box>

            </Box>
        </Box>
    )
}

interface ContainedImageProps {
    url: string;
    onDelete: () => void;
}

function ContainedImage(props: ContainedImageProps) {
    const { url, onDelete } = props;
    return (
        <Box className="relative">
            <Image height="200" width="200" src={url} alt="image" />
            <BaseContainedButton className="absolute top-0 right-0" onClick={onDelete} >Delete</BaseContainedButton>
        </Box>
    )
}



export { SingleImageField, ImageManager }