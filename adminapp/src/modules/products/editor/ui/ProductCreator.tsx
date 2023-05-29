'use client'

import { AppTextField, AppTextArea } from "@adminapp/components/commons/Fields"
import { ImageManager } from "@adminapp/components/commons/Images"
import { adminContext } from "@adminapp/components/context/AppContext"
import { goBack } from "@adminapp/components/navigation/sidebar/logic/helpers"
import { Card, Box } from "@mui/material"

import { useContext, useState } from "react"
import { ProductEditorController } from "../logic/Controller"
import { CreatorActions } from "./Actions"

function ProductCreator() {

    const [name, setName] = useState<string>("")
    const [previewImageUrl, setPreviewImageUrl] = useState<string>("")
    const [productId, setProductId] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [price, setPrice] = useState<string>("0")
    const [quantity, setQuantity] = useState<string>("0")

    const controller = new ProductEditorController()
    const { productsState } = adminContext


    const nameProps = {
        label: "Name",
        value: name,
        onChange: (value: string) => setName(value),
        className: "mr-2 w-full"
    }

    const codeProps = {
        label: "Code",
        value: productId,
        onChange: (value: string) => setProductId(value),
        className: "w-full"
    }

    const descriptionProps = {
        label: "Description",
        value: description,
        onChange: (value: string) => setDescription(value),
        rowCount: 4,
        className: "my-2"
    }

    const priceProps = {
        label: "Price",
        value: price,
        onChange: (value: string) => setPrice(value),
        className: "w-full"
    }

    const quantityProps = {
        label: "Quantity",
        value: quantity,
        onChange: (value: string) => setQuantity(value),
        className: "mr-2 w-full"
    }


    function onSave() {

        let product = controller.createProduct({
            name, imageUrls, description,
            code: productId,
            price: parseFloat(price),
            quantity: parseInt(quantity)
        })

        productsState.addProduct(product)

        goBack()
    }

    function deleteImage(id: number) {
        let newImageUrls = imageUrls.filter((url, index) => index !== id)
        setImageUrls(newImageUrls)
    }

    function addPreviewImage() {
        setImageUrls([...imageUrls, previewImageUrl])
        setPreviewImageUrl("")
    }

    const actionsProps = {
        onSave: onSave,
        onCancel: goBack,
        className: "my-2"
    }

    const imageProps = {
        label: "Image Url",
        value: previewImageUrl,
        onChange: (value: string) => setPreviewImageUrl(value),
        className: "my-2",
        onAdd: addPreviewImage,
        images: imageUrls,
        onDeleteImage: deleteImage,
    }

    return (
        <Box className="w-full h-full flex flex-col justify-center items-center p-8 ">
            <Card className="flex flex-col p-4 w-full">
                <Box className="flex flex-row my-2 w-full">
                    <AppTextField {...nameProps} />
                    <AppTextField {...codeProps} />
                </Box>
                <Box className="flex flex-row my-2 w-full">
                    <AppTextField {...quantityProps} />
                    <AppTextField {...priceProps} />
                </Box>

                <AppTextArea {...descriptionProps} />
                <ImageManager {...imageProps} />
                <CreatorActions {...actionsProps} />

            </Card>
        </Box>
    )
}

export { ProductCreator }