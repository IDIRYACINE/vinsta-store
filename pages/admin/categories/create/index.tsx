

import { AppTextField, AppTextArea } from "src/adminapp/components/commons/Fields"
import { SingleImageField } from "src/adminapp/components/commons/Images"
import { Card, Box } from "@mui/material"

import { useState } from "react"
import { useRouter } from "next/navigation"

import {  addCategory, } from "@adminapp/store";
import { createCategoryApi } from "@vinstacore/api/categoryApi";


import { useAppDispatch } from "@adminapp/store/clientHooks";
import { CategoryEditorController, goBack } from "@adminapp/modules/categories/editor/logic/Controller"
import { CreatorActions } from "@adminapp/modules/categories/editor/ui/Actions"


function CategoryCreatorPage() {

    const [name, setName] = useState<string>("")
    const [imageUrl, setImageUrl] = useState<string>("")
    const [categoryId, setCategoryId] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const controller = new CategoryEditorController()

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
        value: categoryId,
        onChange: (value: string) => setCategoryId(value),
        className: "w-full"


    }

    const descriptionProps = {
        label: "Description",
        value: description,
        onChange: (value: string) => setDescription(value),
        rowCount: 4,
        className: "my-2"
    }

    function onSave() {

        let category = controller.createCategory({
            name, imageUrl, description,
            code: categoryId,
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
        value: imageUrl,
        onChange: (value: string) => setImageUrl(value),
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