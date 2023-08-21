
import { Container } from "@mui/material"

import { Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch,  } from "@storefront/store/clientHooks";
import {  addItem } from "@storefront/store/slices/cartSlice";

import { DisplayImageRoster, PriceDisplay, SandwichTypography, } from "src/storefront/components";
import clsx from "clsx"
import { ActionsRow } from "@storefront/modules/products/components/Components";
import { convertProductToCartItem, goBack } from "@storefront/modules/products/logic/helpers";



export default function Page() {

    const continerStyle = {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "alignItems": "center",
        "height": "100vh",
        "width": "100vw"
    }

    const product = useAppSelector(state => state.products.displayedProduct)
    const categoryId = useAppSelector(state => state.products.displayedCategory!)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const textColor = "black"

    if (product == null) {
        return (<Typography>
            No Product
        </Typography>)
    }


    function handleAddToCart() {
        const item = convertProductToCartItem(product!, categoryId!)

        dispatch(addItem(item))
        goBack(router)
    }

    const actionsRowProps = {
        goBack: () => goBack(router),
        addToCart: handleAddToCart
    }

    const infosBoxClassName = clsx([
        "flex flex-col justify-between items-center p-1 min-w-screen",
        "md:min-w-screen-3/4"
    ])

    const mainBoxClassName = "flex flex-col md:flex-row"

    return (
        <Container sx={continerStyle}>
            <Box className={mainBoxClassName}>
                <DisplayImageRoster images={product.imageUrls} />

                <Box className={infosBoxClassName}>
                    <Typography variant="h2" color={textColor}>{product.name}</Typography>
                    <PriceDisplay inverted={true} currency="DA" price={product.price} />

                    <SandwichTypography color={textColor} text="Description" />

                    <ActionsRow {...actionsRowProps} />

                </Box>

            </Box>
        </Container>
    )
}