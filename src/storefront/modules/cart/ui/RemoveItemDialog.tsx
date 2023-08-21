"use client";

import { Box, Modal, Typography,Button,Card } from "@mui/material";
import { useAppSelector,useAppDispatch, } from "@vinstacore/store/clientHooks";
import { closeItemDialog, removeItem } from "@vinstacore/store/customer/slices/cartSlice";



interface RemoveItemDialogProps {
}

function RemoveCartItemDialog(props: RemoveItemDialogProps) {
    const dispatch = useAppDispatch()
    const isModalOpen = useAppSelector(state => state.customerOrders.isModalOpen)

    function onClose() {
        dispatch(closeItemDialog())
    }

    function onConfirm() {
        dispatch(removeItem(null))
    }

    return (
        <Modal className="flex flex-col justify-center items-center" open={isModalOpen}
            onClose={onClose}>

            <Card className="flex flex-col justify-between items-center p-2" sx={{backgroundColor:"white"}}>
                <Typography variant="h6">Remove Item</Typography>

                <Box className="flex flex-row justify-between items-center">
                    <Button className="mr-2" onClick={onClose} >Cancel</Button>
                    <Button onClick={onConfirm} >Confirm</Button>
                </Box>
            </Card>

        </Modal>
    )
}

export { RemoveCartItemDialog }