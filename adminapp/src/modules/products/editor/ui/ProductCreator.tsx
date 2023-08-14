'use client'

import { AppTextField, AppTextArea } from "@adminapp/components/commons/Fields"
import { ImageManager } from "@adminapp/components/commons/Images"
import { Card, Box } from "@mui/material"


import { addProduct, } from "@adminapp/store";
import { useAppDispatch } from "@adminapp/store/clientHooks";


import { useState } from "react"
import { goBack, ProductEditorController } from "../logic/Controller"
import { CreatorActions } from "./Actions"
import { useRouter } from "next/navigation"
import { createProductApi } from "@adminapp/api/productApi";
import { CategoriesSelector, ColorsSelector, SizesSelector } from "@adminapp/components/commons/Buttons";
import { Repository, sizes, colors, ColorEntity, SizeEntity } from "@vinstastore/vinstacore";

interface ProductCreatorProps {
    categories: Repository.Category[]
}

function ProductCreator(props: ProductCreatorProps) {

    const { categories } = props


    const [name, setName] = useState<string>("")
    const [previewImageUrl, setPreviewImageUrl] = useState<string>("")
    const [productId, setProductId] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [price, setPrice] = useState<string>("0")
    const [quantity, setQuantity] = useState<string>("0")
    const [categoryId, setCategoryId] = useState<string>("")
    const [colorId, setColorId] = useState<string>("")
    const [sizeId, setSizeId] = useState<string>("")

    const controller = new ProductEditorController()

    const router = useRouter()
    const dispatch = useAppDispatch()


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

        const color = colors.find((el) => el.equalsById(colorId))

        const size = sizes.find((el) => el.equalsById(sizeId))

        let product = controller.createProduct({
            name, imageUrls, description,
            code: productId,
            color: (color as ColorEntity).toRaw(),
            size: (size as SizeEntity).toRaw(),
            price: parseFloat(price),
            quantity: parseInt(quantity)
        })

        dispatch(addProduct(product))

        createProductApi({ product, categoryId, productId: product.id }).then((res) => {
            goBack(router)
        })


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
        onCancel: () => goBack(router),
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

    const sizesSelectorProps = {
        onChange: setSizeId,
        className: "w-full mr-2",
        sizes
    }

    const colorsSelectorProps = {
        onChange: setColorId,
        className: "w-full",
        colors
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

                <Box className="flex flex-row my-2 w-full justify-evenly">
                    <SizesSelector {...sizesSelectorProps} />
                    <ColorsSelector {...colorsSelectorProps} />
                </Box>

                <AppTextArea {...descriptionProps} />
                <ImageManager {...imageProps} />
                <CreatorActions {...actionsProps} />

            </Card>
        </Box>
    )
}

export { ProductCreator }