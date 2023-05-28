import { AppTextField, AppTextArea } from "@adminapp/components/commons/Fields"
import { SingleImageField } from "@adminapp/components/commons/Images"
import { AdminAppContext } from "@adminapp/components/context/AppContext"
import { goBack } from "@adminapp/components/navigation/sidebar/logic/helpers"
import { Card, Box } from "@mui/material"

import { useContext, useState } from "react"
import { CategoryEditorController } from "../logic/Controller"
import { CreatorActions } from "./Actions"

function CategoryCreator() {

    const [name, setName] = useState<string>("")
    const [imageUrl, setImageUrl] = useState<string>("")
    const [categoryId, setCategoryId] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const controller = new CategoryEditorController()
    const { categoriesState } = useContext(AdminAppContext)


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

        categoriesState.addCategory(category)

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

export { CategoryCreator }