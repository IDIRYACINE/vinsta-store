import { BaseContainedButton } from "@admin/components/commons/Buttons";
import { Box, Typography,Button } from "@mui/material";
import { navigateToCategoryCreator } from "../logic/helpers";



function CategoryManagerHeader(){
    return(
        <Box className="flex flex-row justify-between w-full">
            <Typography variant="h6"> Categories List </Typography>
            <BaseContainedButton onClick={navigateToCategoryCreator} >Add Category</BaseContainedButton>
        </Box>
            
    )
}

export default CategoryManagerHeader