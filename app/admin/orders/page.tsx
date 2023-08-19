import { loadOrdersApi, OrdersPage,  } from "@vinstastore/vinstaadmin";
import Preloader from "adminapp/src/store/Preloader"

export const revalidate = 1800

async function Page() {

    const orders = (await loadOrdersApi())
    

    const preloaderProps = {
        orders: orders,
    }

    return (
        <div className="flex justify-center items-center">
            <Preloader {...preloaderProps} />

            <OrdersPage  />
        </div>
    )
}

export default Page

