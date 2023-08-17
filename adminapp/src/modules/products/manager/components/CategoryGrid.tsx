"use client"

import { useAppSelector } from "@adminapp/store/clientHooks";
import { Grid, Typography, Box } from "@mui/material";
import  CategoryCard  from "./CategoryCard";



export default function CategoryGrid() {
    let maxHorizontalCards = 2;

    const categories = useAppSelector(
        state =>
        state.categories.categories
    );

    const className = "flex flex-row justify-center items-center p-2 w-screen h-screen"


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
                        <Grid item key={category.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                            <CategoryCard category={category} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}