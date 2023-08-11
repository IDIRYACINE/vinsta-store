'use client'


import { AppTextField, AppTextArea } from "@adminapp/components/commons/Fields"
import { Card, Box } from "@mui/material"
import { EditorActions } from "./Actions"
import { useState } from "react"
import { ImageManager } from "@adminapp/components/commons/Images"
import { goBack, ProductEditorController } from "../logic/Controller"
import { Repository } from "@vinstacore"
import { useRouter } from "next/navigation"


import { addProduct, updateProduct, } from "@adminapp/store";
import { updateProductApi } from "@adminapp/api/productApi"
import { useAppDispatch, useAppSelector } from "@adminapp/store/clientHooks";


interface ProductEditorProps {
    categories: Repository.Category[]
}

function ProductEditor(props:ProductEditorProps) {
    const {categories} = props

    let product = useAppSelector(state => state.products.editedProduct)!
    const categoryId = useAppSelector(state => state.products.editedCategoryId)!

    const [name, setName] = useState<string>(product.name)
    const [previewImageUrl, setPreviewImageUrl] = useState<string>("")
    const [productId, setProductId] = useState<string>(product.id)
    const [description, setDescription] = useState<string>(product.description ?? "")
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [price, setPrice] = useState<string>("0")
    const [quantity, setQuantity] = useState<string>("0")

    let controller = new ProductEditorController()

    const dispatch = useAppDispatch()


    const router = useRouter()


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
        rowCount: 4
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

        let product = controller.updateProduct({
            name, imageUrls, description,
            code: productId,
            price: parseFloat(price),
            quantity: parseInt(quantity)
        })

        dispatch(updateProduct(product))
        updateProductApi({ product, categoryId, productId: product.id }).then ((res) => {
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


    return (
        <Box className="w-full h-full flex flex-col justify-center items-center p-8">
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
                <EditorActions {...actionsProps} />

            </Card>
        </Box>
    )
}

export { ProductEditor }