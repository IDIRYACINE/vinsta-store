"use client";

import { BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { Box, Modal, Typography } from "@mui/material";

import { RootState,AppDispatch,closeDeleteProductDialog, deleteProduct} from "@adminapp/store";
import { useDispatch, useSelector ,TypedUseSelectorHook} from "react-redux";

 const useAppDispatch = () => useDispatch<AppDispatch>()
 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface DeleteProductDialogProps {
}

function DeleteProductDialog(props: DeleteProductDialogProps) {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.categories.isModalOpen)

    function onClose() {
        dispatch(closeDeleteProductDialog())
    }

    function onConfirm() {
        dispatch(deleteProduct(null))


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