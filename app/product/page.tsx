'use client'

import { Container } from "@mui/material"
import { ProductDetaills } from "@storefront/index"





export default function Page() {

    const continerStyle = {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "alignItems": "center",
        "height": "100vh",
        "width": "100vw"
    }

    return (<Container sx={continerStyle}>
        <ProductDetaills />
    </Container>)
}