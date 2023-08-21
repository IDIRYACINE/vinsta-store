import { Button, Card, CardActions, CardMedia, Box, Container, IconButton, Typography } from "@mui/material"
import { Repository } from "@vinstacore/index"
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, openItemDialog, openModel } from "@storefront/store";


interface CartItemCardProps {
    item: Repository.OrderItem,
    onDelete: (item: Repository.OrderItem) => void
}
function CartItemCard(props: CartItemCardProps) {
    const { item, onDelete } = props

    const imageStyle = {
        height: "10vh",
        width: "10vw",
    }

    const boxStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }

    return (
        <Card sx={boxStyle}>
            <CardMedia sx={imageStyle} image={item.images![0]} />
            <Typography variant="body1">
                {item.name}
            </Typography>
            <CardActions>
                <IconButton onClick={() => onDelete(item)}><DeleteIcon /></IconButton>
            </CardActions>
        </Card>
    )
}


interface CartViewProps {
    items: Repository.OrderItem[],
    totalPrice: number
}

export function CartView(props: CartViewProps) {
    const { items, totalPrice } = props
    const dispatch = useAppDispatch()





    function handleRemoveItem(item: Repository.OrderItem) {
        dispatch(openItemDialog(item))
    }

    function handleShipOrder() {
        dispatch(openModel())

    }

    return (

        <Container className="flex flex-col h-max items-center justify-end">
            <Box className="flex flex-col p-2 justify-center items-center flex-2">

                {
                    items.length === 0 ? <Typography variant="h4">No items</Typography> :
                        items.map(item => {
                            return <CartItemCard onDelete={handleRemoveItem} item={item} key={item.productId} />
                        })
                }

            </Box>

            <Container className="flex flex-row justify-end">
                <Button onClick={handleShipOrder}>Ship Order</Button>
                <Button variant="contained" color="primary">Total Price : {totalPrice} Da</Button>
            </Container>

        </Container >)
}