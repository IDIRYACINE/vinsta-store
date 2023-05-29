import { BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { adminContext } from "@adminapp/components/context/AppContext";
import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";

interface DeleteProductDialogProps {
    isOpen: boolean
}

function DeleteProductDialog(props: DeleteProductDialogProps) {
    const { isOpen } = props

    const { productsState } = adminContext

    function onClose() {
        productsState.closeModal()
    }

    function onConfirm() {

        productsState.deleteProduct()

        productsState.closeModal()


    }

    return (
        <Modal open={isOpen}
            onClose={onClose}>

            <Box className="flex flex-col justify-between items-center">
                <Typography variant="h6">Delete Product</Typography>

                <Box className="flex flex-row justify-between items-center">
                    <BaseContainedButton className="mr-2" onClick={onClose} >Cancel</BaseContainedButton>
                    <BaseContainedButton onClick={onConfirm} >Confirm</BaseContainedButton>
                </Box>
            </Box>

        </Modal>
    )
}

export { DeleteProductDialog }