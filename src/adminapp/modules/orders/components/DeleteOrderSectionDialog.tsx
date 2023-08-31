"use client";

import { BaseContainedButton } from "src/adminapp/components/commons/Buttons";
import { Box, Modal, Typography, Card } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks";
import { deleteOrderSegmentApi } from "@vinstacore/index";

interface DeleteOrderSegmentDialogProps {
    onConfirm: () => void
    onCancel: () => void
    isOpen: boolean
}

function DeleteOrderSegmentDialog(props: DeleteOrderSegmentDialogProps) {
    const { isOpen, onCancel, onConfirm } = props

    return (
        <Modal open={isOpen} className="flex flex-col justify-between items-center"
            onClose={onCancel}>

            <Card className="flex flex-col justify-between items-center bg-white p-4">
                <Typography variant="h6">Warning Permananetly Delete This OrderSegment ?</Typography>

                <Box className="flex flex-row justify-between items-center">
                    <BaseContainedButton className="mr-2" onClick={onCancel} >Cancel</BaseContainedButton>
                    <BaseContainedButton onClick={onConfirm} >Confirm</BaseContainedButton>
                </Box>
            </Card>

        </Modal>
    )
}

export { DeleteOrderSegmentDialog }