
import { Typography, Box, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from "next/navigation";
import { convertProductToCartItem, goBack } from "../logic/helpers";
import {useAppSelector, useAppDispatch, addItem } from "@storefront/store";
import { DisplayImageRoster, PriceDisplay, SandwichTypography,} from "@storefront/components";
import clsx from "clsx"



export function ProductDetaills() {

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
        <Box className={mainBoxClassName}>
            <DisplayImageRoster images={product.imageUrls} />

            <Box className={infosBoxClassName}>
                <Typography variant="h2" color={textColor}>{product.name}</Typography>
                <PriceDisplay inverted={true} currency="DA" price={product.price} />

                <SandwichTypography color={textColor} text="Description" />

                <ActionsRow {...actionsRowProps} />

            </Box>

        </Box>
    )
}

interface ActionsRowProps {
    addToCart: () => void,
    goBack: () => void,
}
function ActionsRow(props: ActionsRowProps) {
    const { addToCart } = props


    return (
            <Button className="h-20 w-60" onClick={addToCart}>
                <Box className="flex flex-row justify-evenly items-center w-full">
                    <Typography variant="body1">Add to cart</Typography>
                    <ShoppingCartIcon />
                </Box>
            </Button>
            
    )
}