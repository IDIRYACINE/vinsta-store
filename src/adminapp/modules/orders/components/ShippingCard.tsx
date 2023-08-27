import { BaseContainedButton } from "@adminapp/components/commons/Buttons"
import { Card, Divider, Typography, Box, TextField } from "@mui/material"
import { EOrderStatus, Repository, restockOrderApi } from "@vinstacore/index"
import { restockOrder } from "@vinstacore/store/admin/slices/ordersSlice"
import { useAppDispatch } from "@vinstacore/store/clientHooks"
import { UpdateOrderStatusButton } from "./UpdateOrderStatusDialog"

interface ShippingCardProps {
    address: Repository.Contacts,
    status: string,
    restocked?: boolean | undefined,
    orderId: string,
    dateId: string,
    items: Repository.OrderItem[]
}

function ShippingCard({ address, status, restocked, orderId, items,dateId }: ShippingCardProps) {
    const className = "p-4 flex flex-col justify-center items-start w-96"

    const shipingPrice = `${address.shipingPrice} Da`

    const displayRestockButton = (restocked === undefined) && (status === EOrderStatus.cancelled)

    return (
        <Card className={className}>
            <div className="w-full flex flex-row justify-between items-center">
                <Typography variant="h6">Shipping</Typography>
                {
                    displayRestockButton ? <RestockButton dateId={dateId} orderId={orderId} items={items} /> : null
                }
            </div>
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
                <TextField className="mr-1" id="outlined-shipping-method" label="Shipping Method" variant="outlined" defaultValue={address.shipingType} InputProps={{
                    readOnly: true,
                }} />
                <TextField id="outlined-cost-shipping" label="Shipping Cost" variant="outlined" defaultValue={shipingPrice} InputProps={{
                    readOnly: true,
                }} />

            </div>
            <Divider className="w-full mb-2 mt-2" />


            <UpdateOrderStatusButton status={status} />



        </Card>
    )
}

interface RestockButtonProps {
    orderId: string
    dateId: string,
    items : Repository.OrderItem[]
}
function RestockButton({ orderId, dateId,items }: RestockButtonProps) {
    const dispatch = useAppDispatch()

    const restock = () => {
        dispatch(restockOrder(orderId))
        restockOrderApi({ orderId, dateId, items })
    }

    return (
        <BaseContainedButton onClick={restock}>Restock</BaseContainedButton>

    )
}

export default ShippingCard