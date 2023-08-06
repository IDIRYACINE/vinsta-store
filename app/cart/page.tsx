"use client"

import { CartView, ShippingDialog, useAppSelector, setCart, AppBody, RemoveItemDialog } from "@storefront"
import { loadCartApi } from "adminapp/src/api/cartApi"
import { useAppDispatch } from "adminapp/src/store/clientHooks"


export default function Page() {

    const items = useAppSelector(state => state.orders.cart)
    const totalPrice = useAppSelector(state => state.orders.totalPrice)





    return (
        <AppBody>
            <CartView totalPrice={totalPrice} items={items}></CartView>
            <RemoveItemDialog />
            <ShippingDialog />
        </AppBody>
    )
}