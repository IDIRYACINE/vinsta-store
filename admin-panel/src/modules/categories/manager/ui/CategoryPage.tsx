import { Box } from "@mui/material"
import clsx from "clsx"
import { useState } from "react"
import { CategoryEntity } from "@vinstacore"
import CategoryManagerHeader from "./CategoryManagerHeader"
import {CategoryTable,CategoryRow,mockCategoryRows} from "../../table/"

function CategoryPage(){
    const [rows, setRows] = useState<CategoryEntity[]>([])
    
    const headersData = ["Category Name", "Category Id","Description", "Action"]

     mockCategoryRows().then((res) => {
        setRows(res)
     })

    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    return (
        <Box className={className}>
        <CategoryManagerHeader />
        <CategoryTable headersData={headersData} rowsData={rows} />
        </Box>
    )
}

export {CategoryPage}