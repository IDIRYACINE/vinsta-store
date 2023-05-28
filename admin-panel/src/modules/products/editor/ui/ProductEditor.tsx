import { AppTextField, AppTextArea } from "@admin/components/commons/Fields"
import { Card, Box } from "@mui/material"
import { EditorActions } from "./Actions"
import { useContext, useState } from "react"
import { ImageManager } from "@admin/components/commons/Images"
import { goBack } from "@admin/components/navigation/sidebar/logic/helpers"
import { ProductEditorController } from "../logic/Controller"
import { AdminAppContext } from "@admin/components/context/AppContext"
import { ProductEntity } from "@vinstacore"

function ProductEditor() {
    const { productsState } = useContext(AdminAppContext)

    let product = productsState.product as ProductEntity

    const [name, setName] = useState<string>(product.name.value)
    const [previewImageUrl, setPreviewImageUrl] = useState<string>("")
    const [productId, setProductId] = useState<string>(product.id.value)
    const [description, setDescription] = useState<string>(product.description.value)
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [price, setPrice] = useState<string>("0")
    const [quantity, setQuantity] = useState<string>("0")

    let controller = new ProductEditorController()



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