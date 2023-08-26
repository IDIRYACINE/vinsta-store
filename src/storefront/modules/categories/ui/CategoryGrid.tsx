"use client"

import { Grid, Typography, Box } from "@mui/material";
import {  useAppSelector } from "@vinstacore/store/clientHooks";
import {  activeCategorySelector } from "@vinstacore/store/selectors";

import { CategoryCard } from "./CategoryCard";



export function CategoryGrid() {

    const categories = useAppSelector(
        state =>
        activeCategorySelector(state)
    );
    let maxHorizontalCards = 2;

    const className = "flex flex-row justify-center items-center h-full w-full p-4 m-0"

    if (categories.length === 0) {
        return (
            <Box className={className}>
                <Typography variant="h4">No categories found</Typography>
            </Box>
        )
    }

    return (
        <Grid className={className} container spacing={maxHorizontalCards}>
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