
'use client'

import { Box } from "@mui/material"
import clsx from "clsx"
import CategoryManagerHeader from "./CategoryManagerHeader"
import { CategoryTable } from "../../table"

import { DeleteCategoryDialog } from "./DeleteCategoryDialog"
import { Repository } from "@vinstacore/index"


import { useAppSelector } from "@vinstacore/store/clientHooks"
import {selectAdminAllCategories} from "@vinstacore/store/selectors"


interface CategoryPageProps {
    data: Repository.Category[]
}

function CategoryPage() {


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

export { CategoryPage }



