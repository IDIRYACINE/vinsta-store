
export const dynamic = 'force-dynamic'
export const revalidate = 1800

import {  OrdersPage,  } from "@adminapp/index";
import { loadOrdersApi  } from "@vinstacore/index";

import  Preloader from "@adminapp/store/Preloader"

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

