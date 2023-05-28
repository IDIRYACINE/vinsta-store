import { BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { Box, Typography } from "@mui/material";
import { navigateToProductCreator } from "../logic/helpers";



function ProductManagerHeader() {
    return (
        <Box className="flex flex-row justify-between w-full">
            <Typography variant="h6"> Products List </Typography>
            <BaseContainedButton onClick={navigateToProductCreator} >Add Product</BaseContainedButton>
        </Box>

    )
}

export default ProductManagerHeader