"use client"

import { Grid, Typography, Box } from "@mui/material";
import { useAppSelector } from "@storefront/store";
import { CategoryCard } from "./CategoryCard";



export function CategoryGrid() {
    let maxHorizontalCards = 2;

    const categories = useAppSelector(
        state =>
            state.products.categories
                .filter(category => category.productCount > 0)
    );

    const continerStyle = {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
    }


    if (categories.length === 0) {
        return (
            <Box sx={continerStyle}>
                <Typography variant="h4">No categories found</Typography>
            </Box>
        )
    }

    return (
        <Grid container spacing={maxHorizontalCards}>
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