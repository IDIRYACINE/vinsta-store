
import { Typography, Box, Button } from "@mui/material";
import { DisplayImageRoster, PriceDisplay, SandwichTypography } from "@storefront/components/Generics";
import { useAppSelector,useAppDispatch, addItem } from "@storefront/store";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from "next/navigation";
import { goBack } from "../logic/helpers";




export function ProductDetaills() {

    const product = useAppSelector(state => state.products.displayedProduct)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const textColor = "white"

    if (product == null) {
        return (<Typography>
            No Product
        </Typography>)
    }


    function handleAddToCart() {
        dispatch(addItem(product!))
        goBack(router)
    }

    const actionsRowProps = {
        goBack: () => goBack(router),
        addToCart: handleAddToCart
    }

    const infosBoxStyle = {
        backgroundColor: "burlywood",
        padding: "0.5rem",
        width: "40vw",
        display:"flex",
        flexDirection :"column",
        justifyContent :"space-between",
        alignItems :"center"
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <DisplayImageRoster images={product.imageUrls} />

            <Box sx={infosBoxStyle}>
                <Typography variant="h2" color={textColor}>{product.name}</Typography>
                <PriceDisplay currency="DA" price={product.price} />

                <SandwichTypography color={textColor} text="Description" />

                <ActionsRow {...actionsRowProps} />

            </Box>

        </Box>
    )
}

interface ActionsRowProps {
    addToCart: () => void,
    goBack: () => void ,
}
function ActionsRow(props: ActionsRowProps) {
    const { addToCart, goBack } = props

    return (
        <Box sx={{ displayDirection: "row", display: "flex" }}>
            <Button onClick={addToCart}>
                <Box>
                    <Typography variant="body1">Add to cart</Typography>
                    <ShoppingCartIcon />
                </Box>
            </Button>
            <Button onClick={goBack}>Go back</Button>
        </Box>
    )
}