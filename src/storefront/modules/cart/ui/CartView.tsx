import { Button, Card, CardActions, CardMedia, Box, Container, IconButton, Typography } from "@mui/material"
import { Repository } from "@vinstacore/index"
import { Delete } from '@mui/icons-material';
import { useAppDispatch } from "@vinstacore/store/clientHooks";
import { openItemDialog } from "@vinstacore/store/customer/slices/cartSlice";


interface CartItemCardProps {
    item: Repository.OrderItem,
    onDelete: (item: Repository.OrderItem) => void,
}
function CartItemCard(props: CartItemCardProps) {
    const { item, onDelete } = props

    const imageStyle = {
        height: "10vh",
        width: "10vw",
    }

    return (
        <Card className="flex flex-row justify-between items-center w-full h-full">
            <CardMedia sx={imageStyle} image={item.images![0]} />
            <Typography variant="body1">
                {item.name}
            </Typography>
            <CardActions>
                <IconButton onClick={() => onDelete(item)}><Delete /></IconButton>
            </CardActions>
        </Card>
    )
}


interface CartViewProps {
    items: Repository.OrderItem[],
    totalPrice: number,
    onShipOrder: () => void

}

export function CartView(props: CartViewProps) {
    const { items, totalPrice,onShipOrder } = props


    const dispatch = useAppDispatch()


    function handleRemoveItem(item: Repository.OrderItem) {
        dispatch(openItemDialog(item))
    }


    return (

        <Container className="flex flex-col h-full items-center justify-end ">
            <Box className="flex flex-col p-2  w-full h-full justify-center items-center flex-2">

                {
                    items.length === 0 ? <Typography variant="h4">No items</Typography> :
                        items.map(item => {
                            return <CartItemCard onDelete={handleRemoveItem} item={item} key={item.productId} />
                        })
                }

            </Box>
            {
                items.length === 0 ? null : <Container className="flex flex-row justify-end">
                    <Button onClick={onShipOrder}>Ship Order</Button>
                    <Button variant="contained" color="primary">Total Price : {totalPrice} Da</Button>
                </Container>
            }


        </Container >)
}