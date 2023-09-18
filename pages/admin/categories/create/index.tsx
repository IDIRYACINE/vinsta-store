

import { AppTextField, AppTextArea } from "src/adminapp/components/commons/Fields"
import { SingleImageField } from "src/adminapp/components/commons/Images"
import { Card, Box } from "@mui/material"

import { useRef } from "react"
import { useRouter } from "next/navigation"

import { addCategory, } from "@vinstacore/store/admin/slices/categoriesSlice";
import { createCategoryApi } from "@vinstacore/api/categoryApi";


import { useAppDispatch } from "@vinstacore/store/clientHooks";
import { CategoryEditorController, goBack } from "@adminapp/components/categories/editor/logic/Controller"
import { CreatorActions } from "@adminapp/components/categories/editor/ui/Actions"
import { v4 as uuidv4 } from 'uuid';
import { isValidCategory } from "@vinstacore/libs/validator"


function CategoryCreatorPage() {

    const categoryRef = useRef({
        name : "",
        imageUrl : "",
        code: uuidv4(),
        description : ""
    })

    const controller = new CategoryEditorController()

    const dispatch = useAppDispatch()
    const router = useRouter()



    const nameProps = {
        label: "Name",
        value: categoryRef.current.name,
        onChange: (value: string) => categoryRef.current.name = value,
        className: "mr-2 w-full"
    }

    const descriptionProps = {
        label: "Description",
        value: categoryRef.current.description,
        onChange: (value: string) => categoryRef.current.description = value,
        rowCount: 4,
        className: "my-2"
    }

    function onSave() {
        if(!isValidCategory(categoryRef.current) ){
            return 
        }

        let category = controller.createCategory({
            name: categoryRef.current.name,
            imageUrl: categoryRef.current.imageUrl,
            description: categoryRef.current.description,
            code: categoryRef.current.code,
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
        onChange: (value: string) => categoryRef.current.imageUrl = value,
        className: "my-2"
    }

    return (
        <Box className="w-full h-full flex flex-col justify-center items-center p-8 ">
            <Card className="flex flex-col p-4 w-full">
                <AppTextField {...nameProps} />
                <AppTextArea {...descriptionProps} />
                <SingleImageField {...imageProps} />
                <CreatorActions {...actionsProps} />

            </Card>
        </Box>
    )
}

export default CategoryCreatorPage