import { loadOrdersApi, OrdersPage, panels, setOrders, store } from "@adminapp"
import Preloader from "adminapp/src/store/Preloader"

async function Page() {

    const orders = (await loadOrdersApi())
    store.dispatch(setOrders(orders))
    const ordersHeaders = orders.map(order => order.header)



    const preloaderProps = {
        orders: orders,
        panels: panels,
    }

    return (
        <>
            <Preloader {...preloaderProps} />

            <OrdersPage  />
        </>
    )
}

export default Page

