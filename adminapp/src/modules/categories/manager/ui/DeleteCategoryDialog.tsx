import { BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { adminContext } from "@adminapp/components/context/AppContext";
import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";

interface DeleteCategoryDialogProps {
    isOpen: boolean
}

function DeleteCategoryDialog(props: DeleteCategoryDialogProps) {
    const { isOpen } = props

    const { categoriesState } = adminContext

    function onClose() {
        categoriesState.closeModal()
    }

    function onConfirm() {

        categoriesState.deleteCategory()

        categoriesState.closeModal()


    }

    return (
        <Modal open={isOpen}
            onClose={onClose}>

            <Box className="flex flex-col justify-between items-center">
                <Typography variant="h6">Delete Category</Typography>

                <Box className="flex flex-row justify-between items-center">
                    <BaseContainedButton className="mr-2" onClick={onClose} >Cancel</BaseContainedButton>
                    <BaseContainedButton onClick={onConfirm} >Confirm</BaseContainedButton>
                </Box>
            </Box>

        </Modal>
    )
}

export { DeleteCategoryDialog }