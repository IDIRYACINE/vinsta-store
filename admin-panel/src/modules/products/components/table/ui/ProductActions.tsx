import { Box, Typography } from "@mui/material"
import { TableController } from "../logic/TableController"


interface ProductsActionBarProps {
    controller: TableController
}

function ProductsActionBar(props: ProductsActionBarProps) {

    return (
        <Box className="flex flex-row justify-between">
            <Typography>Products</Typography>

            <Box className="flex flex-row justify-between">

            </Box>
        </Box>
    )
}


export { }