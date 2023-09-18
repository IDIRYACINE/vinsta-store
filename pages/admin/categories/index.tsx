

import { Box, CircularProgress } from "@mui/material"
import clsx from "clsx"


import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory"
import { CategoryTable } from "@adminapp/components/categories/table"
import CategoryManagerHeader from "@adminapp/components/categories/manager/ui/CategoryManagerHeader"
import { DeleteCategoryDialog } from "@adminapp/components/categories/manager/ui/DeleteCategoryDialog"


export default function Page() {



    const { isLoading, data, error } = useLoadDispatchCategories(true)


    const headersData = ["Category Image", "Category Name", "Description", "Action"]


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

