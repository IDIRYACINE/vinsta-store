"use client";

import { BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { Box, Modal, Typography } from "@mui/material";

import {   closeDeleteCategoryDialog, deleteCategory } from "@adminapp/store";
import { useAppDispatch, useAppSelector } from "@adminapp/store/clientHooks";
import { deleteCategoryApi } from "@adminapp/api/categoryApi";


interface DeleteCategoryDialogProps {
}

function DeleteCategoryDialog(props: DeleteCategoryDialogProps) {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.categories.isModalOpen)
    const categoryId = useAppSelector(state => state.categories.editedCategory?.id)

    function onClose() {
        dispatch(closeDeleteCategoryDialog())
    }

    function onConfirm() {
        deleteCategoryApi(categoryId)

        dispatch(deleteCategory(null))
    }

    return (
        <Modal open={isModalOpen}
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