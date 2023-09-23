"use client";

import { BaseContainedButton } from "src/adminapp/components/commons/Buttons";
import { Box, Modal, Typography,Card } from "@mui/material";

import {   closeDeleteCategoryDialog, deleteCategory } from "@vinstacore/store/admin/slices/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { deleteCategoryApi } from "@vinstacore/index";
import {selectAdminEditCategory} from "@vinstacore/store/selectors"

interface DeleteCategoryDialogProps {
}

function DeleteCategoryDialog(props: DeleteCategoryDialogProps) {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.adminCategories.isModalOpen)
    const categoryId = useAppSelector(state => selectAdminEditCategory(state)?.id)

    function onClose() {
        dispatch(closeDeleteCategoryDialog())
    }

    function onConfirm() {
        deleteCategoryApi(categoryId)

        dispatch(deleteCategory(null))
    }

    return (
        <Modal open={isModalOpen} className="flex flex-col justify-between items-center"
            onClose={onClose}>

            <Card className="flex flex-col justify-between items-center bg-white p-4">
                <Typography variant="h6">Delete Category</Typography>

                <Box className="flex flex-row justify-between items-center">
                    <BaseContainedButton className="mr-2" onClick={onClose} >Cancel</BaseContainedButton>
                    <BaseContainedButton onClick={onConfirm} >Confirm</BaseContainedButton>
                </Box>
            </Card>

        </Modal>
    )
}

export { DeleteCategoryDialog }