import { Card, Divider, Typography, Box, TextField } from "@mui/material"
import { Repository } from "@vinstastore/vinstacore"
import { UpdateOrderStatusButton } from "./UpdateOrderStatusDialog"

interface ShippingCardProps {
    address: Repository.Contacts,
    status : string
}

function ShippingCard({ address,status }: ShippingCardProps) {
    const className = "p-4 flex flex-col justify-center items-start w-96"


    return (
        <Card className={className}>
            <Typography variant="h6">Shipping</Typography>
            <Divider className="w-full mb-2" />

            <div className="flex flex-col mb-4 w-full">
                <Typography variant="body1">Shipping Address</Typography>
                <Typography variant="body1">{address.city}</Typography>

                <div className="flex flex-row justify-between w-full">
                    <Typography variant="body1">Customer</Typography>
                    <Typography variant="body1">{address.customer}</Typography>
                </div>

                <div className="flex flex-row justify-between w-full">
                    <Typography variant="body1">Phone</Typography>
                    <Typography variant="body1">{address.phone}</Typography>
                </div>
                <Divider className="w-full" />

            </div>

            <div className="flex flex-row justify-between w-full">
                <TextField className="mr-1" id="outlined-shipping-method" label="Shipping Method" variant="outlined" defaultValue="Standard" InputProps={{
                    readOnly: true,
                }} />
                <TextField id="outlined-cost-shipping" label="Shipping Cost" variant="outlined" defaultValue="1600 Da" InputProps={{
                    readOnly: true,
                }} />

            </div>
            <Divider className="w-full mb-2 mt-2" />

            <div className="flex flex-row justify-between w-full">
                <TextField id="outlined-order-status" className="mr-1" label="Order Status" variant="outlined" defaultValue={status} InputProps={{
                    readOnly: true,
                }} />
                <UpdateOrderStatusButton />

            </div>


        </Card>
    )
}

export default ShippingCard