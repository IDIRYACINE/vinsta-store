"use client"

import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material"
import {  useAppDispatch, useAppSelector ,} from "@vinstacore/store/clientHooks"
import {   activeCategorySelector ,} from "@vinstacore/store/selectors"

import { Repository } from "@vinstacore/infrastructure/ports/IRepositories"
import { setDisplayedCategory } from "@vinstacore/store/customer/slices/productsSlice"

interface CategoryNavigationProps {
    toggleDrawer? : () => void
}
export function CategoryNavigation({toggleDrawer}: CategoryNavigationProps)  {

    const dispatch = useAppDispatch()
    const categories = useAppSelector((state) => activeCategorySelector(state))

    function onCategoryClick(category: Repository.Category) {
        dispatch(setDisplayedCategory(category.id))
        if(toggleDrawer){
            toggleDrawer()
        }
    }




    return (
        <Box className="flex flex-col p-2 w-full">
            <Typography color="secondary">Categories</Typography>
            <List>
                {
                    categories.map((category) => {
                        return (
                            <ListItemButton key={category.id} onClick={(_) => onCategoryClick(category)}>
                                <ListItemText color="white" primary={<Typography color="secondary">{category.name}</Typography>} />
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </Box>
    )

}