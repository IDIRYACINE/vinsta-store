import { loadOrdersApi, OrdersPage, panels, setOrders, store } from "@vinstastore/vinstaadmin";
import Preloader from "adminapp/src/store/Preloader"

async function Page() {

    const orders = (await loadOrdersApi())
    



    const preloaderProps = {
        orders: orders,
    }

    return (
        <>
            <Preloader {...preloaderProps} />

            <OrdersPage  />
        </>
    )
}

export default Page

