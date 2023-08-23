

import { Box } from "@mui/material"
import clsx from "clsx"


import { useAppSelector } from "@vinstacore/store/clientHooks"
import {selectAdminAllCategories} from "@vinstacore/store/selectors"
import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory"
import { CategoryTable } from "@adminapp/modules/categories/table"
import CategoryManagerHeader from "@adminapp/modules/categories/manager/ui/CategoryManagerHeader"
import { DeleteCategoryDialog } from "@adminapp/modules/categories/manager/ui/DeleteCategoryDialog"


export default function Page() {

    useLoadDispatchCategories(true);


    const categories = useAppSelector(state => selectAdminAllCategories(state))


    const headersData = ["Category Name", "Category Id", "Description", "Action"]


    const className = clsx(["p-4 flex flex-col justify-center items-center"])
        



    return (
        <Box className={className}>
            <CategoryManagerHeader />
            <CategoryTable headersData={headersData} rowsData={categories} />
            <DeleteCategoryDialog />
        </Box>


    
    )
}

