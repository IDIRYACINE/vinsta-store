import { OrderDetaills } from "@adminapp"
import { store } from "@adminapp"

function OrderDetaillsPage() {
    const order = store.getState().orders.editedOrder!

    return (
        <OrderDetaills order={order} />
    )
}

export default OrderDetaillsPage