import { BaseContainedButton } from "src/adminapp/components/commons/Buttons";
import { useAppDispatch } from "@vinstacore/store/clientHooks";
import { Box, Typography } from "@mui/material";
import { ProductRoutes } from "@vinstacore/index";
import { useRouter } from "next/navigation";
import { setDisplayedCategory } from "@vinstacore/store/admin/slices/productsSlice";


function ProductManagerHeader() {
    const router = useRouter()
    const dispatch = useAppDispatch()

    function navigateToProductCreator() {
        router.replace(ProductRoutes.create);
    }

    function navigateToCategoriesSelection(){
        dispatch(setDisplayedCategory(null))
    }

    return (
        <Box className="flex flex-row justify-between w-full mb-2">
            <Typography variant="h6" sx={{flex:"3"}}> Products List </Typography>
            <Box className="flex flex-row w-full justify-between" sx={{flex:"2"}}>
            <BaseContainedButton className="mr-2" onClick={navigateToCategoriesSelection} >Catalogue</BaseContainedButton>

            <BaseContainedButton onClick={navigateToProductCreator} >Add Product</BaseContainedButton>
            </Box>
        </Box>

    )
}

export default ProductManagerHeader