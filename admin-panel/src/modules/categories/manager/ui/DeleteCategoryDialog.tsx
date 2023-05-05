import { BaseContainedButton } from "@admin/components/commons/Buttons";
import { AdminAppContext } from "@admin/components/context/AppContext";
import { Box, Modal ,Typography} from "@mui/material";
import { useContext } from "react";

interface DeleteCategoryDialogProps {
    
}

function DeleteCategoryDialog(props: DeleteCategoryDialogProps) {
    const { categoriesState } = useContext(AdminAppContext)

    function onClose() {
        categoriesState.closeModal()
    }

    function onConfirm(){
    }

    return (
        <Modal open={categoriesState.isModalOpen}
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