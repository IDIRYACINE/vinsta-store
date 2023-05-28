import { Card, Divider, Typography } from "@mui/material"
import { Address } from "@vinstacore"

interface ShippingCardProps{
    address : Address
}

function ShippingCard({address}:ShippingCardProps){
    const className = "p-4 flex flex-col justify-center items-start"
    return (
        <Card className={className}>
            <Typography variant="h6">Shipping</Typography>
            <Divider sx={{"width":"100%"}}/>

            <Typography variant="h6">{address.city.value}</Typography>
            <Typography variant="h6">{address.subCity.value}</Typography>

        </Card>
    )
}

export default ShippingCard