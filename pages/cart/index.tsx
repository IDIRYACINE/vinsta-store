
import { AppBody } from "@storefront/components/Generics";
import { CartView } from "@storefront/modules/cart/ui/CartView";
import { RemoveCartItemDialog } from "@storefront/modules/cart/ui/RemoveItemDialog";
import { ShippingDialog } from "@storefront/modules/shipping/ui/ShippingForm";
import {  useAppSelector } from "@vinstacore/store/clientHooks";
import {  selectCustomerCartItems, selectCustomerCartPrice} from "@vinstacore/store/selectors";
import {useState} from 'react'

export default function Page() {

    const items = useAppSelector(state => selectCustomerCartItems(state))
    const totalPrice = useAppSelector(state => selectCustomerCartPrice(state))


    const [isModalOpen, closeModel] = useState(false)


    const cartViewProps = {
        items,
        totalPrice,
        onShipOrder: () => closeModel(true)
    }



    return (
        <div className="w-full h-full">
            <CartView {...cartViewProps} />
            <RemoveCartItemDialog />
            <ShippingDialog isModalOpen={isModalOpen} closeModel={() => closeModel(false)}/>
        </div>
    )
}