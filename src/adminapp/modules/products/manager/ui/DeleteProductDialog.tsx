"use client";

import { BaseContainedButton } from "src/adminapp/components/commons/Buttons";
import { Box, Modal, Typography } from "@mui/material";

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
        dispatch(deleteProduct(null))
        deleteProductApi({categoryId,productId})

    }

    return (
        <Modal open={isModalOpen}
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