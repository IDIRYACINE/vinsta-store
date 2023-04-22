import { useRouter } from "next/router"
import mockOrders from "admin-panel/src/modules/orders/tests/MockOrders"
import { OrderMapper } from "@vinstacore"
import OrderDetaills from "admin-panel/src/modules/orders/ui/OrderDetaills"

function OrderDetaillsPage(){
    const id = useRouter().query.orderId
    const order = new OrderMapper().toDomain(mockOrders[0])

    return (
       <OrderDetaills order={order} />
    )
}

export default OrderDetaillsPage