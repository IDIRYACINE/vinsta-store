"use client";

import { BaseContainedButton } from "src/adminapp/components/commons/Buttons";
import { Box, Card, Modal, Typography } from "@mui/material";

import { closeDeleteProductDialog, deleteProduct} from "@vinstacore/store/admin/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { deleteProductApi } from "@vinstacore/index";


interface DeleteProductDialogProps {
}

function DeleteProductDialog(props: DeleteProductDialogProps) {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.adminProducts.isModalOpen)

    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)!
    const productId = useAppSelector(state => state.adminProducts.editedProduct?.id)!

    function onClose() {
        dispatch(closeDeleteProductDialog())
    }

    function onConfirm() {
        deleteProductApi({categoryId,productId})
        dispatch(deleteProduct(null))

    }

    return (
        <Modal open={isModalOpen} className="flex flex-col justify-between items-center"
            onClose={onClose}>

            <Card className="flex flex-col justify-between items-center bg-white p-4">
                <Typography variant="h6">Delete Product</Typography>

                <Box className="flex flex-row justify-between items-center">
                    <BaseContainedButton className="mr-2" onClick={onClose} >Cancel</BaseContainedButton>
                    <BaseContainedButton onClick={onConfirm} >Confirm</BaseContainedButton>
                </Box>
            </Card>

        </Modal>
    )
}

export { DeleteProductDialog }