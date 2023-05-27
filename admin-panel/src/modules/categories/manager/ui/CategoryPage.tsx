import { Box } from "@mui/material"
import clsx from "clsx"
import CategoryManagerHeader from "./CategoryManagerHeader"
import { CategoryTable } from "../../table/"

import { observer } from "mobx-react"
import { CategoriesState } from "../state/CategoriesState"
import { DeleteCategoryDialog } from "./DeleteCategoryDialog"
import { useContext, useEffect,useMemo } from "react"
import { AdminAppContext } from "@admin/components/context/AppContext"


interface StateProps {
    store: CategoriesState
}

function CategoryPage() {

    const headersData = ["Category Name", "Category Id", "Description", "Action"]


    const {categoriesState} = useContext(AdminAppContext)
    const className = clsx(["p-4 flex flex-col justify-center items-center"])
   

    

    useEffect(() => {
        console.log("chanfged")
        categoriesState.loadMockCategories()
    },[categoriesState])


    

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



