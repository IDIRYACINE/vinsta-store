"use client"

import { CartView, useAppSelector, setCart,AppBody,RemoveItemDialog } from "@storefront"
import { loadCartApi } from "adminapp/src/api/cartApi"
import { useAppDispatch } from "adminapp/src/store/clientHooks"


export default function Page() {

    const items = useAppSelector(state => state.orders.cart)
    const disaptch = useAppDispatch()


    loadCartApi().then((cart) => {
        disaptch(setCart(cart))
    })




    return (
        <AppBody>
            <CartView items={items}></CartView>
            <RemoveItemDialog />
        </AppBody>
    )
}