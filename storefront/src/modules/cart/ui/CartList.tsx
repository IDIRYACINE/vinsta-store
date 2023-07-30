import { Button, Card, CardMedia, Container, Typography } from "@mui/material"
import { Repository } from "@vinstacore"


interface CartItemCardProps {
    item: Repository.Product
}
function CartItemCard(props: CartItemCardProps) {
    const { item } = props

    const imageStyle = {
        height: "10vh",
        width: "10vw"
    }

    return (<Card>
        <CardMedia sx={imageStyle} image={item.imageUrls[0].url} />
        <Typography variant="body1">
            {item.name}
        </Typography>
    </Card>)
}


interface CartViewProps {
    items: Repository.Product[]
}

export function CartView(props: CartViewProps) {
    const { items } = props

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

    return (

        <Container>
            <Container sx={containerStyle}>

                {
                    items.map(item => {
                        return <CartItemCard item={item} key={item.id} />
                    })
                }

            </Container>

            <Container sx={actionBarStyle}>
                <Button>Ship Order</Button>
            </Container>

        </Container >)
}