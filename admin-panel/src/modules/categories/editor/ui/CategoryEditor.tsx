import { AppTextField,AppTextArea } from "@admin/components/commons/Fields"
import { Card,Box } from "@mui/material"
import {EditorActions} from "./Actions"
import { useState } from "react"
import { SingleImageField } from "@admin/components/commons/Images"

function CategoryEditor (){

    const [name, setName] = useState<string>("")
    const [imageUrl, setImageUrl] = useState<string>("")
    const [categoryId, setCategoryId] = useState<string>("")
    const [description, setDescription] = useState<string>("")   

   
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


    const actionsProps = {
        onSave: () => {},
        onCancel: () => {},
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

export {CategoryEditor}