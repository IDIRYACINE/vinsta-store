'use client'

import { AppTextField, AppTextArea } from "src/adminapp/components/commons/Fields"
import { ImageManager } from "src/adminapp/components/commons/Images"
import { Card, Box } from "@mui/material"


import { addProduct, } from "@vinstacore/store/admin/slices/productsSlice";
import { useAppDispatch } from "@vinstacore/store/clientHooks";


import { useRef,  useState } from "react"
import { goBack, ProductEditorController } from "../logic/Controller"
import { CreatorActions } from "./Actions"
import { useRouter } from "next/navigation"
import { createProductApi } from "@vinstacore/index";
import { CategoriesSelector, ColorsSelector, SizesSelector } from "src/adminapp/components/commons/Buttons";
import { Repository, sizes, colors, ColorEntity, SizeEntity } from "@vinstacore/index";

interface ProductCreatorProps {
    categories: Repository.Category[]
}

function ProductCreator(props: ProductCreatorProps) {

    const { categories } = props


    const name = useRef<string>("")
    const productId = useRef<string>("")
    const description = useRef<string>("")
    const imageUrls = useRef<string[]>([])
    const price = useRef<string>("")
    const quantity = useRef<string>("")
    const categoryId = useRef<string>("")
    const colorId = useRef<string>("")
    const sizeId = useRef<string>("")

    const controller = new ProductEditorController()

    const router = useRouter()
    const dispatch = useAppDispatch()


    const nameProps = {
        label: "Name",
        value: name.current,
        onChange: (value: string) => name.current = value,
        className: "mr-2 w-full"
    }

    const codeProps = {
        label: "Code",
        value: productId.current,
        onChange: (value: string) => productId.current = value,
        className: "w-full"
    }

    const descriptionProps = {
        label: "Description",
        value: description.current,
        onChange: (value: string) => description.current = value,
        rowCount: 4,
        className: "my-2"
    }

    const priceProps = {
        label: "Price",
        value: price.current,
        onChange: (value: string) => price.current = value,
        className: "w-full"
    }

    const quantityProps = {
        label: "Quantity",
        value: quantity.current,
        onChange: (value: string) => quantity.current = value,
        className: "mr-2 w-full"
    }



    function onSave() {
        const color = colors.find((el) => el.equalsById(colorId.current))

        const size = sizes.find((el) => el.equalsById(sizeId.current))

        let product = controller.createProduct({
            name: name.current,
            imageUrls: imageUrls.current, description: description.current,
            code: productId.current,
            color: (color as ColorEntity).toRaw(),
            size: (size as SizeEntity).toRaw(),
            price: parseFloat(price.current),
            quantity: parseInt(quantity.current)
        })

        dispatch(addProduct(product))

        createProductApi({ product, categoryId:categoryId.current, productId: product.id }).then((res) => {
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
        onChange: (value: string[]) => imageUrls.current = value,
        className: "my-2",
        images: imageUrls,
    }

    const categoriesSelectorProps = {
        categories: categories,
        onChange: (value: string) => categoryId.current = value,
    }

    const sizesSelectorProps = {
        onChange: (value: string) => sizeId.current = value,
        className: "w-full mr-2",
        sizes
    }

    const colorsSelectorProps = {
        onChange: (value: string) => colorId.current = value,
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