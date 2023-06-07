'use client'

import { AppTextField, AppTextArea } from "@adminapp/components/commons/Fields"
import { ImageManager } from "@adminapp/components/commons/Images"
import { Card, Box } from "@mui/material"


import { RootState, AppDispatch, addProduct, } from "@adminapp/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";


const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

import { useState } from "react"
import { ProductEditorController } from "../logic/Controller"
import { CreatorActions } from "./Actions"
import { useRouter } from "next/navigation"
import { createProductApi } from "@adminapp/api/productApi";
import { CategoriesSelector } from "@adminapp/components/commons/Buttons";
import { Repository } from "@vinstacore";

interface ProductCreatorProps {
    categories: Repository.Category[]
}

function ProductCreator(props:ProductCreatorProps) {

    const {categories} = props


    const [name, setName] = useState<string>("")
    const [previewImageUrl, setPreviewImageUrl] = useState<string>("")
    const [productId, setProductId] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [price, setPrice] = useState<string>("0")
    const [quantity, setQuantity] = useState<string>("0")
    const [categoryId, setCategoryId] = useState<string>("")

    const controller = new ProductEditorController()

    const router = useRouter()
    const dispatch = useAppDispatch()

    function goBack() {
        router.back()
    }

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

        dispatch(addProduct(product))
        createProductApi({ product, categoryId, productId: product.id })


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

    const categoriesSelectorProps = {
        categories: categories,
        onChange: setCategoryId
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
                <CategoriesSelector {...categoriesSelectorProps} />

                <AppTextArea {...descriptionProps} />
                <ImageManager {...imageProps} />
                <CreatorActions {...actionsProps} />

            </Card>
        </Box>
    )
}

export { ProductCreator }