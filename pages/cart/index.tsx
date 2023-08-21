
import { AppBody } from "@storefront/components/Generics";
import { CartView } from "@storefront/modules/cart/ui/CartView";
import { RemoveCartItemDialog } from "@storefront/modules/cart/ui/RemoveItemDialog";
import { ShippingDialog } from "@storefront/modules/shipping/ui/ShippingForm";
import {  useAppSelector } from "@vinstacore/store/clientHooks";
import {  selectCustomerCartItems, selectCustomerCartPrice} from "@vinstacore/store/selectors";

export default function Page() {

    const items = useAppSelector(state => selectCustomerCartItems(state))
    const totalPrice = useAppSelector(state => selectCustomerCartPrice(state))





    return (
        <AppBody>
            <CartView totalPrice={totalPrice} items={items}></CartView>
            <RemoveCartItemDialog />
            <ShippingDialog />
        </AppBody>
    )
}