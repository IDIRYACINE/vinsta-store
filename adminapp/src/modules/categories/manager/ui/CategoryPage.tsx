
'use client'

import { Box } from "@mui/material"
import clsx from "clsx"
import CategoryManagerHeader from "./CategoryManagerHeader"
import { CategoryTable } from "../../table/"

import { DeleteCategoryDialog } from "./DeleteCategoryDialog"
import { Repository } from "vinstacore/src"


import { RootState, AppDispatch, } from "@adminapp/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";


 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface CategoryPageProps {
    data: Repository.Category[]
}

function CategoryPage(props: CategoryPageProps) {
    const categories = useAppSelector(state => state.categories.categories)

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


