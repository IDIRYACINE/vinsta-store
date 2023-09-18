"use client"

import { Grid, Typography, Box } from "@mui/material";
import { Repository } from "@vinstacore/index";
import { ProductCard } from "./ProductCard";
import clsx from "clsx"

interface ProductGridProps{
    products : Repository.Product[],
    className? : string
}

export function ProductGrid(props:ProductGridProps) {
    let {products} = props
    let maxHorizontalCards = 2;

    
    const className = clsx([
        "flex flex-row justify-center items-center p-2",
        props.className
    ])
   


    if (products.length === 0) {
        return (
            <Box className={className}>
                <Typography variant="h4">No products found</Typography>
            </Box>
        )
    }



    return (
        <Grid className={className} container spacing={maxHorizontalCards}>
            {
                products.map(product => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} lg={4}>
                            <ProductCard product={product} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}