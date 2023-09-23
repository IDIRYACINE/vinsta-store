"use client"

import { useAppSelector } from "@vinstacore/store/clientHooks";
import { Grid, Typography, Box } from "@mui/material";
import  CategoryCard  from "./CategoryCard";
import { selectAdminAllCategories } from "@vinstacore/store/selectors";


export default function CategoryGrid() {
    let maxHorizontalCards = 2;

    const categories = useAppSelector(
        state =>
        selectAdminAllCategories(state)
    );

    const className = "flex flex-row justify-center items-center p-2 w-full h-full"


    if (categories.length === 0) {
        return (
            <Box className ={className}>
                <Typography variant="h4">No categories found</Typography>
            </Box>
        )
    }

    return (
        <Grid className ={className} container spacing={maxHorizontalCards}>
            {
                categories.map(category => {
                    return (
                        <Grid item key={category.id} xs={12} sm={6} lg={4} >
                            <CategoryCard category={category} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}