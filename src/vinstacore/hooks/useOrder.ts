import { setOrders } from "@vinstacore/store/admin/slices/ordersSlice"
import { useAppDispatch } from "@vinstacore/store/clientHooks"
import { useRouter } from "next/router"
import {  useEffect, useState } from "react"
import { loadOrdersApi } from ".."


export const useLoadOrderIdParam = () => {
    const param = useRouter()

    const [orderId, setOrderId] = useState<string>("")

    useEffect(() => {

        setOrderId(param.query.orderId as string)

    }, [param.query, orderId])

    return { orderId }
}


export const useLoadDispatchOrders = () => {

    const dispatch = useAppDispatch()


    useEffect(() => {
        loadOrdersApi().then((res) => {
            dispatch(setOrders(res))
        })

    }, [dispatch])
}