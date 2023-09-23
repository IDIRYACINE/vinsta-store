import { BaseContainedButton } from "@adminapp/components/commons/Buttons"
import { Card, Divider, Typography, Box, TextField } from "@mui/material"
import { cancelOrderApi, claimOrderApi, EOrderStatus, Repository, restockOrderApi } from "@vinstacore/index"
import { restockOrder, updateOrderStatus } from "@vinstacore/store/admin/slices/ordersSlice"
import { useAppDispatch } from "@vinstacore/store/clientHooks"
import { orderStatusList } from "../domain/OrderStatus"

interface ShippingCardProps {
    address: Repository.Contacts,
    status: string,
    restocked?: boolean | undefined,
    orderId: string,
    dateId: string,
    items: Repository.OrderItem[],
    totalPrice: number
}

function ShippingCard({ address, status, restocked, orderId, totalPrice, items, dateId }: ShippingCardProps) {
    const className = "p-4 flex flex-col justify-center items-start w-96"


    const displayRestockButton = (restocked === undefined) && (status === EOrderStatus.confirmed)
    const displayClaimButton = (restocked === undefined) && (status === EOrderStatus.onHold)

    const ActionButton = () => {
        if (displayRestockButton) {
            return <RestockButton dateId={dateId} orderId={orderId} items={items} />
        }
        if (displayClaimButton) {
            return (
                <div className="flex flex-row gap-8">
                    <ClaimButton dateId={dateId} orderId={orderId} items={items}/>
                    <CancelButton dateId={dateId} orderId={orderId} />
                </div>
            )
        }

        return null
    }

    return (
        <Card className={className}>
            <div className="w-full flex flex-row justify-between items-center">
                <Typography variant="h6">Shipping</Typography>
                <ActionButton />
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
                <div className="flex flex-row justify-between w-full">
                    <Typography className="text-bold" variant="body1">Total</Typography>
                    <Typography variant="body1">{totalPrice + address.shipingPrice} DA</Typography>
                </div>
                <Divider className="w-full" />

            </div>

            <div className="flex flex-row justify-between w-full">
                <TextField className="mr-1" id="outlined-shipping-method" label="Shipping Method" variant="outlined" defaultValue={address.shipingType} InputProps={{
                    readOnly: true,
                }} />
                <TextField id="outlined-cost-shipping" label="Shipping Cost" variant="outlined" defaultValue={address.shipingPrice} InputProps={{
                    readOnly: true,
                }} />

            </div>
            <Divider className="w-full mb-2 mt-2" />

        </Card>
    )
}

interface RestockButtonProps {
    orderId: string
    dateId: string,
    items: Repository.OrderItem[]
}
function RestockButton({ orderId, dateId, items }: RestockButtonProps) {
    const dispatch = useAppDispatch()

    const restock = () => {
        dispatch(restockOrder(orderId))
        restockOrderApi({ orderId, dateId, items })
    }

    return (
        <BaseContainedButton onClick={restock}>Restock</BaseContainedButton>

    )
}

function ClaimButton({ orderId, dateId, items }: RestockButtonProps) {
    const dispatch = useAppDispatch()

    const status = orderStatusList.find(status => status.name === EOrderStatus.confirmed)!

    const claim = () => {
        dispatch(updateOrderStatus({ orderId, status}))
        claimOrderApi({ orderId, dateId, items })
    }

    return (
        <BaseContainedButton onClick={claim}>Confirm</BaseContainedButton>

    )
}
interface CancelButtonProps{
    orderId: string
    dateId: string,
}

function CancelButton({ orderId, dateId }: CancelButtonProps) {
    const dispatch = useAppDispatch()

    const status = orderStatusList.find(status => status.name === EOrderStatus.cancelled)!

    const cancel = () => {
        dispatch(updateOrderStatus({ orderId, status}))
        cancelOrderApi({ orderId, dateId })
    }

    return (
        <BaseContainedButton onClick={cancel}>Cancel</BaseContainedButton>

    )
}

export default ShippingCard