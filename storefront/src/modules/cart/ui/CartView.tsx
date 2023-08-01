import { Button, Card, CardActions, CardMedia, Container,IconButton, Typography } from "@mui/material"
import { Repository } from "@vinstacore"
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch,openItemDialog, openModel } from "@storefront/store";


interface CartItemCardProps {
    item: Repository.OrderItem,
    onDelete : (item:Repository.OrderItem) => void
}
function CartItemCard(props: CartItemCardProps) {
    const { item ,onDelete} = props

    const imageStyle = {
        height: "10vh",
        width: "10vw",
    }

    const boxStyle = {
        display:"flex",
        flexDirection:"row",
        justifyContent : "space-between",
        alignItems : "center"
    }

    return (<Card sx = {boxStyle}>
        <CardMedia sx={imageStyle} image={item.images![0]} />
        <Typography variant="body1">
            {item.name}
        </Typography>
        <CardActions>
            <IconButton onClick={() => onDelete(item)}><DeleteIcon/></IconButton>
        </CardActions>
    </Card>)
}


interface CartViewProps {
    items: Repository.OrderItem[]
}

export function CartView(props: CartViewProps) {
    const { items } = props
    const dispatch = useAppDispatch()


    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddings: "1rem",
        height: "80vh",
        width: "100%",
        overflowY: "scroll"
    }

    const actionBarStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",

    }


    function handleRemoveItem(item:Repository.OrderItem){
        dispatch(openItemDialog(item))
    }

    function handleShipOrder(){
        dispatch(openModel())

    }

    return (

        <Container>
            <Container sx={containerStyle}>

                {
                    items.map(item => {
                        return <CartItemCard onDelete={handleRemoveItem} item={item} key={item.productId} />
                    })
                }

            </Container>

            <Container sx={actionBarStyle}>
                <Button onClick={handleShipOrder}>Ship Order</Button>
            </Container>

        </Container >)
}