'use client'


import { AppTextField, AppTextArea } from "src/adminapp/components/commons/Fields"
import { Card, Box } from "@mui/material"
import { EditorActions } from "./Actions"
import { useRef, } from "react"
import { ImageManager } from "@adminapp/components/commons/Images"
import { goBack, ProductEditorController } from "../logic/Controller"
import { Repository, sizes, colors, SizeEntity, ColorEntity } from "@vinstacore/index"
import { useRouter } from "next/navigation"


import { updateProduct, } from "@vinstacore/store/admin/slices/productsSlice";
import { updateProductApi } from "@vinstacore/index"
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { SizesSelector, ColorsSelector } from "@adminapp/components/commons/Buttons"
import { isValidProduct } from "@vinstacore/libs/validator"


interface ProductEditorProps {
    categories: Repository.Category[]
}

function ProductEditor(props: ProductEditorProps) {

    let product = useAppSelector(state => state.adminProducts.editedProduct)
    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)

    const imageUrlsProduct = () => {
        if (!product) return []

        return product.imageUrls.map(el => el.url)

    }
    


    const productRef = useRef({
        name: product?.name ?? "",
        productId: product?.id ?? "",
        description: product?.description ?? "",
        price: product?.price.toString() ?? "0",
        imageUrls: imageUrlsProduct(),
        categoryId: categoryId,
        colorId: product?.color.id.toString() ?? "0",
        sizeId: product?.size.id.toString() ?? "0"
    })



    let controller = new ProductEditorController()

    const dispatch = useAppDispatch()


    const router = useRouter()


    const nameProps = {
        label: "Name",
        value: productRef.current.name,
        onChange: (value: string) => productRef.current.name = value,
        className: "mr-2 w-full"
    }

    const descriptionProps = {
        label: "Description",
        value: productRef.current.description,
        onChange: (value: string) => productRef.current.description = value,
        rowCount: 4
    }


    const sizesSelectorProps = {
        onChange: (value: string) => productRef.current.sizeId = value,
        className: "w-full mr-2",
        value: productRef.current.sizeId,

        sizes
    }

    const colorsSelectorProps = {
        onChange: (value: string) => productRef.current.colorId = value,
        className: "w-full",
        value: productRef.current.colorId,

        colors
    }

    const priceProps = {
        label: "Price",

        value: productRef.current.price,
        onChange: (value: string) => productRef.current.price = value,
        className: "w-full"
    }




    function onSave() {

        if (!categoryId || !productRef.current.productId || !isValidProduct(productRef.current)) return;

        const color = colors.find((el) => el.equalsById(productRef.current.colorId))
        const size = sizes.find((el) => el.equalsById(productRef.current.sizeId))

        let product = controller.updateProduct({
            name: productRef.current.name,
            imageUrls: productRef.current.imageUrls,
            description: productRef.current.description,
            code: productRef.current.productId,
            color: (color as ColorEntity).toRaw(),
            size: (size as SizeEntity).toRaw(),
            price: parseFloat(productRef.current.price),
            quantity: 1
        })

        dispatch(updateProduct(product))
        updateProductApi({ product, categoryId, productId: product.id }).then((res) => {
            goBack(router)
        })


    }

    const actionsProps = {
        onSave: onSave,
        onCancel: () => goBack(router),
        className: "my-2"

    }

    const imageProps = {
        label: "Image Url",
        onChange: (value: string[]) => productRef.current.imageUrls = value,
        className: "my-2",
        images: productRef.current.imageUrls,
    }


    return (
        <Box className="w-full h-full flex flex-col justify-center items-center p-8">
            <Card className="flex flex-col p-4 w-full">
                    <AppTextField {...nameProps} />
                <Box className="flex flex-row my-2 w-full">
                    <AppTextField {...priceProps} />
                </Box>

                <Box className="flex flex-row my-2 w-full justify-evenly">
                    <SizesSelector {...sizesSelectorProps} />
                    <ColorsSelector {...colorsSelectorProps} />
                </Box>

                <AppTextArea {...descriptionProps} />
                <ImageManager {...imageProps} />
                <EditorActions {...actionsProps} />

            </Card>
        </Box>
    )
}

export { ProductEditor }