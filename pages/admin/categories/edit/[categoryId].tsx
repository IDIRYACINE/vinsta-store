
import { AppTextField, AppTextArea } from "src/adminapp/components/commons/Fields"
import { Card, Box } from "@mui/material"
import { EditorActions } from "@adminapp/components/categories/editor/ui/Actions"
import { CategoryEditorController, goBack } from "@adminapp/components/categories/editor/logic/Controller"
import { useRef } from "react"
import { SingleImageField } from "src/adminapp/components/commons/Images"
import { useRouter } from "next/navigation"


import { updateCategoryApi } from "@vinstacore/api/categoryApi";
import {   updateCategory, } from "@vinstacore/store/admin/slices/categoriesSlice";
import {   selectAdminEditCategory, } from "@vinstacore/store/selectors";

import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { isValidCategory } from "@vinstacore/libs/validator"


function CategoryEditorPage() {

    let category = useAppSelector(state => selectAdminEditCategory(state))
    const dispatch = useAppDispatch()

    const categoryRef = useRef({
        name : category?.name ?? "",
        imageUrl : category?.imageUrl ?? "",
        code: category?.id ?? "",
        description : category?.description ?? ""
    })



    const router = useRouter()


    if (!category) {
        return (<div></div>)
    }
    
    const nameProps = {
        label: "Name",
        value: categoryRef.current.name,
        onChange: (value: string) => categoryRef.current.name = value,
        className: "mr-2 w-full"
    }

    const codeProps = {
        label: "Code",
        value: categoryRef.current.code,
        onChange: (value: string) => categoryRef.current.code = value,
        className: "w-full",
        readOnly : true


    }
    const descriptionProps = {
        label: "Description",
        value: categoryRef.current.description,
        onChange: (value: string) => categoryRef.current.description = value,
        rowCount: 4
    }

    let controller = new CategoryEditorController()


    function onSave() {

        if(!isValidCategory(categoryRef.current) ){
            return
        }

        let updatedCategory = controller.updateCategory({
            name: categoryRef.current.name,
            imageUrl: categoryRef.current.imageUrl,
            description: categoryRef.current.description,
            code: categoryRef.current.code,
            productCount: category?.productCount ?? 0
        })
        
        dispatch(updateCategory(updatedCategory))

        updateCategoryApi(updatedCategory).then((res)=>{
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
        value: categoryRef.current.imageUrl,
        onChange: (value: string) => categoryRef.current.imageUrl = value,
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