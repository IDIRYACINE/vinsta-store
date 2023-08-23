

import { AppTextField, AppTextArea } from "src/adminapp/components/commons/Fields"
import { SingleImageField } from "src/adminapp/components/commons/Images"
import { Card, Box } from "@mui/material"

import { useRef } from "react"
import { useRouter } from "next/navigation"

import { addCategory, } from "@vinstacore/store/admin/slices/categoriesSlice";
import { createCategoryApi } from "@vinstacore/api/categoryApi";


import { useAppDispatch } from "@vinstacore/store/clientHooks";
import { CategoryEditorController, goBack } from "@adminapp/modules/categories/editor/logic/Controller"
import { CreatorActions } from "@adminapp/modules/categories/editor/ui/Actions"


function CategoryCreatorPage() {

    const name = useRef("")
    const imageUrl = useRef("")
    const categoryId = useRef("")
    const description = useRef("")

    const controller = new CategoryEditorController()

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
        value: categoryId.current,
        onChange: (value: string) => categoryId.current = value,
        className: "w-full"


    }

    const descriptionProps = {
        label: "Description",
        value: description.current,
        onChange: (value: string) => description.current = value,
        rowCount: 4,
        className: "my-2"
    }

    function onSave() {

        let category = controller.createCategory({
            name: name.current,
            imageUrl: imageUrl.current,
            description: description.current,
            code: categoryId.current,
        })

        dispatch(addCategory(category))
        createCategoryApi(category).then((res) => {
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
        onChange: (value: string) => imageUrl.current = value,
        className: "my-2"
    }

    return (
        <Box className="w-full h-full flex flex-col justify-center items-center p-8 ">
            <Card className="flex flex-col p-4 w-full">
                <Box className="flex flex-row my-2 w-full">
                    <AppTextField {...nameProps} />
                    <AppTextField {...codeProps} />
                </Box>
                <AppTextArea {...descriptionProps} />
                <SingleImageField {...imageProps} />
                <CreatorActions {...actionsProps} />

            </Card>
        </Box>
    )
}

export default CategoryCreatorPage