import { BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { Box, Typography } from "@mui/material";
import { ProductRoutes } from "@adminapp/components/navigation/Routes";
import { useRouter } from "next/navigation";


function ProductManagerHeader() {
    const router = useRouter()
    function navigateToProductCreator() {
        router.push(ProductRoutes.create);

    }
    return (
        <Box className="flex flex-row justify-between w-full">
            <Typography variant="h6"> Products List </Typography>
            <BaseContainedButton onClick={navigateToProductCreator} >Add Product</BaseContainedButton>
        </Box>

    )
}

export default ProductManagerHeader