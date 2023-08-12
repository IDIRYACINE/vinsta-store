"use client"

import { CartView, ShippingDialog, useAppSelector, setCart, AppBody, RemoveCartItemDialog } from "@vinstastore/storefront";
import { loadCartApi } from "@vinstastore/vinstaadmin";
import { useAppDispatch } from "@vinstastore/vinstaadmin";


export default function Page() {

    const items = useAppSelector(state => state.orders.cart)
    const totalPrice = useAppSelector(state => state.orders.totalPrice)





    return (
        <AppBody>
            <CartView totalPrice={totalPrice} items={items}></CartView>
            <RemoveCartItemDialog />
            <ShippingDialog />
        </AppBody>
    )
}