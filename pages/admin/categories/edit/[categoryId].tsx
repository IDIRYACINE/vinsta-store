
import { AppTextField, AppTextArea } from "src/adminapp/components/commons/Fields"
import { Card, Box } from "@mui/material"
import { EditorActions } from "@adminapp/modules/categories/editor/ui/Actions"
import { CategoryEditorController, goBack } from "@adminapp/modules/categories/editor/logic/Controller"
import { useRef } from "react"
import { SingleImageField } from "src/adminapp/components/commons/Images"
import { useRouter } from "next/navigation"


import { updateCategoryApi } from "@vinstacore/api/categoryApi";
import {   updateCategory, } from "@vinstacore/store/admin/slices/categoriesSlice";
import {   selectAdminEditCategory, } from "@vinstacore/store/selectors";

import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";


function CategoryEditorPage() {

    let category = useAppSelector(state => selectAdminEditCategory(state))
    const dispatch = useAppDispatch()


    const name = useRef(category?.name ?? "")
    const imageUrl = useRef(category?.imageUrl ?? "")
    const categoryId = useRef(category?.id ?? "")
    const description= useRef(category?.description ?? "")


    const router = useRouter()


    if (!category) {
        return (<div></div>)
    }
    
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
        className: "w-full",
        readOnly : true


    }
    const descriptionProps = {
        label: "Description",
        value: description.current,
        onChange: (value: string) => description.current = value,
        rowCount: 4
    }

    let controller = new CategoryEditorController()


    function onSave() {

        let category = controller.updateCategory({
            name: name.current,
            imageUrl: imageUrl.current,
            description: description.current,
            code: categoryId.current,
        })
        
        dispatch(updateCategory(category))

        updateCategoryApi(category).then((res)=>{
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
        value: imageUrl.current,
        onChange: (value: string) => imageUrl.current = value,
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

export default CategoryEditorPage