import { Box, Typography,Button } from "@mui/material";
import { navigateToCategoryCreator } from "../logic/helpers";



function CategoryManagerHeader(){
    return(
        <Box className="flex flex-row justify-between w-full">
            <Typography variant="h6"> Categories List </Typography>
            <Button onClick={navigateToCategoryCreator} variant="contained">Add Category</Button>
        </Box>
            
    )
}

export default CategoryManagerHeader