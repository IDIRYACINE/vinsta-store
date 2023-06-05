"use client";

import { BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { Box, Modal, Typography } from "@mui/material";

import { RootState,AppDispatch,closeDeleteCategoryDialog, deleteCategory} from "@adminapp/store";
import { useDispatch, useSelector ,TypedUseSelectorHook} from "react-redux";

 const useAppDispatch = () => useDispatch<AppDispatch>()
 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface DeleteCategoryDialogProps {
}

function DeleteCategoryDialog(props: DeleteCategoryDialogProps) {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.categories.isModalOpen)

    function onClose() {
        dispatch(closeDeleteCategoryDialog())
    }

    function onConfirm() {
        dispatch(deleteCategory(null))
    }

    return (
        <Modal open={  isModalOpen }
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