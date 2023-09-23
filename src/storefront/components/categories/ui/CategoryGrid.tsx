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

    const className = "flex flex-row justify-center items-center h-full min-h-96 p-4 m-0"

    if (categories.length === 0) {
        return (
            <Box className={className}>
                <Typography variant="h4">No categories found</Typography>
            </Box>
        )
    }

    return (
        <Box className="flex flex-col justify-start items-center w-full py-4 m-0">
            <Box className="flex flex-row items-center w-full">
                <span className="app-divider"/>
                <Typography variant="h4">Categories</Typography>
            </Box>
        <Grid  className="flex flex-row justify-center items-center w-full px-4 m-0" container spacing={maxHorizontalCards}>
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
        </Box>
    )
}