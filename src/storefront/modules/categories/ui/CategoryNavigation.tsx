"use client"

import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material"
import { setDisplayedCategory, useAppDispatch, useAppSelector ,activeCategorySelector} from "@storefront/store"
import { Repository } from "@vinstacore/infrastructure/ports/IRepositories"


export function CategoryNavigation() {

    const dispatch = useAppDispatch()
    const categories = useAppSelector((state) => activeCategorySelector(state))

    function onCategoryClick(category: Repository.Category) {
        dispatch(setDisplayedCategory(category.id))
    }




    return (
        <Box className="flex flex-col p-2 w-full">
            <Typography>Categories</Typography>
            <List>
                {
                    categories.map((category) => {
                        return (
                            <ListItemButton key={category.id} onClick={(_) => onCategoryClick(category)}>
                                <ListItemText primary={category.name} />
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </Box>
    )

}