"use client"

import { Grid, Typography, Box } from "@mui/material";
import { displayedProductsSelector,  useAppSelector } from "@storefront/store";
import { ProductCard } from "./ProductCard";



export function ProductGrid() {
    let maxHorizontalCards = 2;

    let products = useAppSelector(
        state =>
            displayedProductsSelector(state)
    );

    const continerStyle = {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "alignItems": "center",
        "height": "100vh",
        "width": "100vw"
    }


    if (products.length === 0) {
        return (
            <Box sx={continerStyle}>
                <Typography variant="h4">No products found</Typography>
            </Box>
        )
    }

    return (
        <Grid sx={continerStyle} container spacing={maxHorizontalCards}>
            {
                products.map(product => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                            <ProductCard product={product} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}