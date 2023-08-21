
import { AppBody } from "@storefront/components/Generics";
import { CartView } from "@storefront/modules/cart/ui/CartView";
import { RemoveCartItemDialog } from "@storefront/modules/cart/ui/RemoveItemDialog";
import { ShippingDialog } from "@storefront/modules/shipping/ui/ShippingForm";
import {  useAppSelector } from "@storefront/store";

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