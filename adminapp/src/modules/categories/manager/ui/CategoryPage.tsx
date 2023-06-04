
'use client'

import { Box } from "@mui/material"
import clsx from "clsx"
import CategoryManagerHeader from "./CategoryManagerHeader"
import { CategoryTable } from "../../table/"

import { observer } from "mobx-react"
import { CategoriesState } from "../state/CategoriesState"
import { DeleteCategoryDialog } from "./DeleteCategoryDialog"
import { adminContext } from "@adminapp/components/context/AppContext"
import { Repository } from "vinstacore/src"


interface StateProps {
    store: CategoriesState
}

interface CategoryPageProps {
    data : Repository.Category[]
}

function CategoryPage(props:CategoryPageProps) {

    const headersData = ["Category Name", "Category Id", "Description", "Action"]


    const {categoriesState} = adminContext
    const className = clsx(["p-4 flex flex-col justify-center items-center"])
   
    categoriesState.setCategories(props.data)
    

    const View = observer((props: StateProps) => {

        const categoryDialogProps = {
            isOpen : props.store.isModalOpen
        }
        
        return (
            <Box className={className}>
                <CategoryManagerHeader />
                <CategoryTable headersData={headersData} rowsData={props.store.categories}  />
                <DeleteCategoryDialog {...categoryDialogProps}  />
            </Box>


        )
    })


    return (<View store={categoriesState} />)
}

export { CategoryPage }



