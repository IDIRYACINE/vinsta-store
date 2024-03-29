import { useAppSelector,  } from "@vinstacore/store/clientHooks";
import { useLoadDispatchOrders } from "@vinstacore/sdk/useOrder";
import { OrdersPage, OrdersPageTable } from "@adminapp/components/orders/components/OrdersPage";
import { CircularProgress } from "@mui/material";

export default function Page() {

    const displayedDateId = useAppSelector(state => state.adminOrders.displayedDateId)

    const {data,isLoading,error} = useLoadDispatchOrders()

    let Widget =  displayedDateId ? OrdersPageTable : OrdersPage  


    return isLoading ? <div className="flex flex-row justify-center items-center"><CircularProgress/></div> : <Widget/>

}
