"use client";

import { Box, Modal, Typography,Button } from "@mui/material";
import { useAppSelector,useAppDispatch,closeItemDialog,removeItem } from "@storefront/store";



interface RemoveItemDialogProps {
}

function RemoveItemDialog(props: RemoveItemDialogProps) {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.orders.isModalOpen)

    function onClose() {
        dispatch(closeItemDialog())
    }

    function onConfirm() {
        dispatch(removeItem(null))
    }

    return (
        <Modal open={isModalOpen}
            onClose={onClose}>

            <Box className="flex flex-col justify-between items-center">
                <Typography variant="h6">Remove Item</Typography>

                <Box className="flex flex-row justify-between items-center">
                    <Button className="mr-2" onClick={onClose} >Cancel</Button>
                    <Button onClick={onConfirm} >Confirm</Button>
                </Box>
            </Box>

        </Modal>
    )
}

export { RemoveItemDialog }