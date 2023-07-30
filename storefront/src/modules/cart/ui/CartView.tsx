import { Button, Card, CardActions, CardMedia, Container,IconButton, Typography } from "@mui/material"
import { Repository } from "@vinstacore"
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch,openItemDialog } from "@storefront/store";


interface CartItemCardProps {
    item: Repository.Product,
    onDelete : (item:Repository.Product) => void
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
        <CardMedia sx={imageStyle} image={item.imageUrls[0].url} />
        <Typography variant="body1">
            {item.name}
        </Typography>
        <CardActions>
            <IconButton onClick={() => onDelete(item)}><DeleteIcon/></IconButton>
        </CardActions>
    </Card>)
}


interface CartViewProps {
    items: Repository.Product[]
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


    function handleRemoveItem(item:Repository.Product){
        dispatch(openItemDialog(item))
    }

    return (

        <Container>
            <Container sx={containerStyle}>

                {
                    items.map(item => {
                        return <CartItemCard onDelete={handleRemoveItem} item={item} key={item.id} />
                    })
                }

            </Container>

            <Container sx={actionBarStyle}>
                <Button>Ship Order</Button>
            </Container>

        </Container >)
}