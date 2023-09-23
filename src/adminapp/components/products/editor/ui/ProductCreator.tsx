'use client'

import { AppTextField, AppTextArea } from "src/adminapp/components/commons/Fields"
import { ImageManager } from "src/adminapp/components/commons/Images"
import { Card, Box } from "@mui/material"


import { addProduct, } from "@vinstacore/store/admin/slices/productsSlice";
import { useAppDispatch } from "@vinstacore/store/clientHooks";


import { useRef } from "react"
import { goBack, ProductEditorController } from "../logic/Controller"
import { CreatorActions } from "./Actions"
import { useRouter } from "next/navigation"
import { createProductApi } from "@vinstacore/index";
import { CategoriesSelector, ColorsSelector, SizesSelector } from "src/adminapp/components/commons/Buttons";
import { Repository, sizes, colors, ColorEntity, SizeEntity } from "@vinstacore/index";
import {  isValidPhoneNumber, isValidProduct } from "@vinstacore/libs/validator";
import { v4 as uuidv4 } from 'uuid';

interface ProductCreatorProps {
    categories: Repository.Category[]
}

function ProductCreator(props: ProductCreatorProps) {

    const { categories } = props


    const productRef = useRef({
        name: "",
        productId: uuidv4(),
        description: "",
        price: "",
        imageUrls: [] as string[],
        categoryId: "",
        colorId: "",
        sizeId: ""
    })


    const controller = new ProductEditorController()

    const router = useRouter()
    const dispatch = useAppDispatch()


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
        rowCount: 4,
        className: "my-2"
    }

    const priceProps = {
        label: "Price",
        value: productRef.current.price,
        onChange: (value: string) => productRef.current.price = value,
        className: "w-full",
        enforcer : (value:string) => value.replace(/[^0-9]/g, '')
    }





    function onSave() {

        if (!isValidProduct(productRef.current)) return;


        const color = colors.find((el) => el.equalsById(productRef.current.colorId))

        const size = sizes.find((el) => el.equalsById(productRef.current.sizeId))

        let product = controller.createProduct({
            name: productRef.current.name,
            imageUrls: productRef.current.imageUrls,
            description: productRef.current.description,
            code: productRef.current.productId,
            color: (color as ColorEntity).toRaw(),
            size: (size as SizeEntity).toRaw(),
            price: parseFloat(productRef.current.price),
            quantity: 1
        })

        dispatch(addProduct(product))

        createProductApi({ product, categoryId: productRef.current.categoryId, productId: product.id }).then((res) => {
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

    const categoriesSelectorProps = {
        categories: categories,
        onChange: (value: string) => productRef.current.categoryId = value,
    }

    const sizesSelectorProps = {
        onChange: (value: string) => productRef.current.sizeId = value,
        className: "w-full mr-2",
        sizes
    }

    const colorsSelectorProps = {
        onChange: (value: string) => productRef.current.colorId = value,
        className: "w-full",
        colors
    }

    return (
        <Box className="w-full h-full flex flex-col justify-center items-center p-8 ">
            <Card className="flex flex-col p-4 w-full">
                <AppTextField {...nameProps} />
                <Box className="flex flex-row my-2 w-full">
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