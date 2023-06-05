'use client'

import { AppTextField, AppTextArea } from "@adminapp/components/commons/Fields"
import { Card, Box } from "@mui/material"
import { EditorActions } from "./Actions"
import { useState } from "react"
import { SingleImageField } from "@adminapp/components/commons/Images"
import { CategoryEditorController } from "../logic/Controller"
import { useRouter } from "next/navigation"


import { RootState, AppDispatch, updateCategory, } from "@adminapp/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { updateCategoryApi } from "@adminapp/api/api"


 const useAppDispatch = () => useDispatch<AppDispatch>()
 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function CategoryEditor() {

    let category = useAppSelector(state => state.categories.editedCategory)!
    const dispatch = useAppDispatch()

    const [name, setName] = useState<string>(category.name)
    const [imageUrl, setImageUrl] = useState<string>(category.imageUrl)
    const [categoryId, setCategoryId] = useState<string>(category.id)
    const [description, setDescription] = useState<string>(category.description ?? "")


    const router = useRouter()

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
        value: categoryId,
        onChange: (value: string) => setCategoryId(value),
        className: "w-full"


    }
    const descriptionProps = {
        label: "Description",
        value: description,
        onChange: (value: string) => setDescription(value),
        rowCount: 4
    }

    let controller = new CategoryEditorController()


    function onSave() {

        let category = controller.updateCategory({
            name, imageUrl, description,
            code: categoryId,
        })
        
        dispatch(updateCategory(category))

        updateCategoryApi(category)
        

        goBack()
    }


    const actionsProps = {
        onSave: onSave,
        onCancel: goBack,
        className: "my-2"

    }

    const imageProps = {
        label: "Image Url",
        value: imageUrl,
        onChange: (value: string) => setImageUrl(value),
        className: "my-2"
    }

    return (
        <Box className="w-full h-full flex flex-col justify-center items-center p-8">
            <Card className="flex flex-col p-4 w-full">
                <Box className="flex flex-row my-2 w-full">
                    <AppTextField {...nameProps} />
                    <AppTextField {...codeProps} />
                </Box>
                <AppTextArea {...descriptionProps} />
                <SingleImageField {...imageProps} />

                <EditorActions {...actionsProps} />

            </Card>
        </Box>
    )
}

export { CategoryEditor }