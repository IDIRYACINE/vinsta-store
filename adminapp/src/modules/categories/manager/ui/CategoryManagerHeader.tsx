import { BaseContainedButton } from "@adminapp/components/commons/Buttons";
import { Box, Typography } from "@mui/material";

import { CategoryRoutes } from "@adminapp/components/navigation/Routes";
import { useRouter } from "next/navigation";




function CategoryManagerHeader() {
    const router = useRouter()

    function navigateToCategoryCreator() {
        router.replace(CategoryRoutes.create);
    }

    return (
        <Box className="flex flex-row justify-between w-full">
            <Typography variant="h6"> Categories List </Typography>
            <BaseContainedButton onClick={navigateToCategoryCreator} >Add Category</BaseContainedButton>
        </Box>

    )
}

export default CategoryManagerHeader