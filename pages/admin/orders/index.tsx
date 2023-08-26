import { useAppSelector,  } from "@vinstacore/store/clientHooks";
import { useLoadDispatchOrders } from "@vinstacore/hooks/useOrder";
import { OrdersPage, OrdersPageTable } from "@adminapp/modules/orders/components/OrdersPage";

export default function Page() {

    const displayedDateId = useAppSelector(state => state.adminOrders.displayedDateId)

    useLoadDispatchOrders()


    if(!displayedDateId){
        return (<OrdersPage></OrdersPage>)
    }

    return (
       <OrdersPageTable />
    )
}
