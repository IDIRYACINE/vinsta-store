import clsx from "clsx"
import { useAppDispatch, useAppSelector, } from "@vinstacore/store/clientHooks";
import { orderDatesSelector, orderHeaderSelector } from "@vinstacore/store/selectors";
import OrdersTable from "@adminapp/modules/orders/components/table/ui/OrdersTable";
import { OrderDateCard } from "./OrdersDateCard"
import { setOrderDateId } from "@vinstacore/store/admin/slices/ordersSlice";
import { Grid, Typography } from "@mui/material";

export function OrdersPageTable() {

    const ordersHeaders = useAppSelector(state => orderHeaderSelector(state))



    const headersData = ["Order ID", "Status", "Totale"]

    const className = clsx(["p-4 flex flex-col justify-center items-center"])

    return (
        <div className="flex justify-center items-center">

            <div className={className}>
                <OrdersTable headersData={headersData} rowsData={ordersHeaders} />
            </div>
        </div>
    )
}


export function OrdersPage() {
    const orderDates = useAppSelector(state => orderDatesSelector(state))
    const dispatch = useAppDispatch()


    let maxHorizontalCards = 2;

    const className = "flex flex-row justify-center items-center h-full w-full p-4 m-0"

    function onOrderCardClick(id: string) {
        dispatch(setOrderDateId(id))
    }

    if (orderDates.length === 0) return (
    <div className={className}>
        <Typography variant="h4">
            No orders
        </Typography>
    </div>
    )


    return (
        <Grid className={className} container spacing={maxHorizontalCards}>
            {
                orderDates.map((orderDate, index) => {
                    return (
                        <Grid item key={orderDate} xs={12} sm={6} lg={4} >
                            <OrderDateCard orderDateId={orderDate} onClick={onOrderCardClick} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}