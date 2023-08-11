"use client"

import { Grid, Typography, Box } from "@mui/material";
import { Repository } from "@vinstacore";
import { ProductCard } from "./ProductCard";


interface ProductGridProps{
    products : Repository.Product[]
}

export function ProductGrid(props:ProductGridProps) {
    let {products} = props
    let maxHorizontalCards = 2;

    

    const continerStyle = {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "alignItems": "center",
        
        "padding":"2rem"
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