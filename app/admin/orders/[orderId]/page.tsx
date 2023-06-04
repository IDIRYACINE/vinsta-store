import { useRouter } from "next/router"
import { OrderDetaills, mockOrderRows } from "@adminapp"

function OrderDetaillsPage() {
    const id = useRouter().query.orderId
    const order = mockOrderRows()[0]

    return (
        <OrderDetaills order={order} />
    )
}

export default OrderDetaillsPage