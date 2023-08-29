import { useAppSelector,  } from "@vinstacore/store/clientHooks";
import { useLoadDispatchOrders } from "@vinstacore/hooks/useOrder";
import { OrdersPage, OrdersPageTable } from "@adminapp/modules/orders/components/OrdersPage";
import { CircularProgress } from "@mui/material";

export default function Page() {

    const displayedDateId = useAppSelector(state => state.adminOrders.displayedDateId)

    const {data,isLoading,error} = useLoadDispatchOrders()

    let Widget =  displayedDateId ? OrdersPage : OrdersPageTable 


    return isLoading ? <CircularProgress/> : <Widget/>

}
