'use client'

import { Box, TextField } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { BaseContainedButton } from "src/adminapp/components/commons/Buttons";


interface SingleImageFieldProps {
    label: string;
    value?: string;
    onChange: (value: string) => void;
    className?: string;
}

function SingleImageField(props: SingleImageFieldProps) {
    const { onChange, label } = props
    const [value, setValue] = useState(props.value ?? "https://images.freeimages.com/images/large-previews/bb0/cat-in-window-1218032.jpg")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value)
        setValue(event.target.value)
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
    onChange: (value: string[]) => void;
    className?: string;
    images? : string[]
}

function ImageManager(props: ImageManagerProps) {
    const defaultImage = "https://images.freeimages.com/images/large-previews/bb0/cat-in-window-1218032.jpg"
    const [preview, setPreview] = useState<string>(props.images?.[0] ?? defaultImage)
    const [images, setImages] = useState<string[]>(props.images ?? [])

    const { onChange, label,   } = props




    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setPreview(event.target.value)
    }

    function handleAdd() {
        const newImages = [...images, preview]
        onChange(newImages)
        setImages(newImages)

    }

    function handleDelete(id: number) {
        let newImageUrls = images.filter((url, index) => index !== id)
        onChange(newImageUrls)
        setImages(newImageUrls)
    }

    const className = clsx([props.className, "w-full mr-2"])

    return (
        <Box>

            <Box className="flex flex-row justify-between">
                <TextField
                    className={className}
                    label={label}
                    value={preview}
                    onChange={handleChange}
                />

                <BaseContainedButton onClick={handleAdd} >Add</BaseContainedButton>

            </Box>

            <Box >
                <Image height="200" width="200" src={preview} alt="preview" />

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