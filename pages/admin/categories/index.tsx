

import { Box, CircularProgress } from "@mui/material"
import clsx from "clsx"


import { selectAdminAllCategories } from "@vinstacore/store/selectors"
import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory"
import { CategoryTable } from "@adminapp/modules/categories/table"
import CategoryManagerHeader from "@adminapp/modules/categories/manager/ui/CategoryManagerHeader"
import { DeleteCategoryDialog } from "@adminapp/modules/categories/manager/ui/DeleteCategoryDialog"


export default function Page() {



    const { isLoading, data, error } = useLoadDispatchCategories(true)


    const headersData = ["Category Name", "Category Id", "Description", "Action"]


    const className = clsx(["p-4 flex flex-col justify-center items-center"])




    return (
        isLoading ? <div className="flex flex-row justify-center items-center"><CircularProgress /></div> :
            <Box className={className}>
                <CategoryManagerHeader/>
                <CategoryTable headersData={headersData} rowsData={data?? []} />
                <DeleteCategoryDialog />
            </Box>
    )
}

