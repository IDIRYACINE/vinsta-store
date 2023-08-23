import { setOrders } from "@vinstacore/store/admin/slices/ordersSlice"
import { useAppDispatch } from "@vinstacore/store/clientHooks"
import { useParams } from "next/navigation"
import { useRef, useEffect } from "react"
import { loadOrdersApi } from ".."


export const useLoadOrderIdParam = () => {

    const param = useParams()

    let orderId = useRef<string>("")

    useEffect(() => {
        orderId.current = param.orderId as string
    },[param,orderId])

    return {orderId : orderId.current}
}


export const useLoadDispatchOrders = () => {

    const dispatch = useAppDispatch()


    useEffect(() => {
        loadOrdersApi().then((res) => {
            dispatch(setOrders(res))
        })
    
    },[dispatch])
}