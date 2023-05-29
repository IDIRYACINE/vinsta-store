import { useRouter } from "next/router"
import { OrderMapper } from "@vinstacore"
import { OrderDetaills, mockOrderRows } from "@adminapp"

function OrderDetaillsPage() {
    const id = useRouter().query.orderId
    const order = new OrderMapper().toDomain(mockOrderRows()[0])

    return (
        <OrderDetaills order={order} />
    )
}

export default OrderDetaillsPage