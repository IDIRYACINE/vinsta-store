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


interface ProductEditorProps {
    categories: Repository.Category[]
}

function ProductEditor(props: ProductEditorProps) {

    let product = useAppSelector(state => state.adminProducts.editedProduct)
    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)
    const name = useRef<string>(product?.name ?? "")
    const productId = useRef<string>(product?.id ?? "")
    const description = useRef<string>(product?.description ?? "")

    const imageUrlsProduct = () => {
        if (!product) return []

        return product.imageUrls.map(el => el.url)

    }

    const imageUrls = useRef<string[]>(imageUrlsProduct())

    const price = useRef<string>(product?.price.toString() ?? "0")
    const colorId = useRef<string>(product?.color.id.toString() ?? "0")
    const sizeId = useRef<string>(product?.size.id.toString() ?? "0")

    let controller = new ProductEditorController()

    const dispatch = useAppDispatch()


    const router = useRouter()


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
        className: "w-full",
        readOnly: true


    }
    const descriptionProps = {
        label: "Description",
        value: description.current,
        onChange: (value: string) => description.current = value,
        rowCount: 4
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

    const priceProps = {
        label: "Price",

        value: price.current,
        onChange: (value: string) => price.current = value,
        className: "w-full"
    }




    function onSave() {

        if (!categoryId || !productId) return;

        const color = colors.find((el) => el.equalsById(colorId.current))
        const size = sizes.find((el) => el.equalsById(sizeId.current))

        let product = controller.updateProduct({
            name: name.current,
            imageUrls: imageUrls.current, description: description.current,
            code: productId.current,
            color: (color as ColorEntity).toRaw(),
            size: (size as SizeEntity).toRaw(),
            price: parseFloat(price.current),
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
        onChange: (value: string[]) => imageUrls.current = value,
        className: "my-2",
        images: imageUrls,
    }


    return (
        <Box className="w-full h-full flex flex-col justify-center items-center p-8">
            <Card className="flex flex-col p-4 w-full">
                <Box className="flex flex-row my-2 w-full">
                    <AppTextField {...nameProps} />
                    <AppTextField {...codeProps} />
                </Box>
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