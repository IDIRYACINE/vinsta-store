

import { Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch,  } from "@vinstacore/store/clientHooks";
import {  addItem } from "@vinstacore/store/customer/slices/cartSlice";

import { DisplayImageRoster, PriceDisplay, SandwichTypography, } from "@storefront/components/commons";
import clsx from "clsx"
import { ActionsRow } from "@storefront/components/products/components/Components";
import { convertProductToCartItem, goBack } from "@storefront/components/products/logic/helpers";



export default function Page() {

   

    const product = useAppSelector(state => state.customerProducts.displayedProduct)
    const categoryId = useAppSelector(state => state.customerProducts.displayedCategory!)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const textColor = "white"

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
        "flex flex-col justify-between items-center p-2 min-w-screen ",
        "md:min-w-screen-3/4 bg-primary"
    ])

    const mainBoxClassName = "flex flex-col md:flex-row mt-5"
    
    return (
        <Box className={mainBoxClassName}>
        <DisplayImageRoster images={product.imageUrls} />

        <Box className={infosBoxClassName} sx={{minHeight:"24rem"}}>
            <Typography variant="h2" color={textColor}>{product.name}</Typography>
            <PriceDisplay inverted={false} currency="DA" price={product.price} />

            <SandwichTypography color={textColor} title="Description" text={product.description} />

            <ActionsRow {...actionsRowProps} />

        </Box>

    </Box>
    )
}