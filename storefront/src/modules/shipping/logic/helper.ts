import { EOrderStatus, Repository,Destination ,DeliveryType} from "@vinstacore";
import { v4 as uuidv4 } from 'uuid';


interface GenerateOrderOptions {
    cart: Repository.OrderItem[],
    destination: Destination,
    customer: string,
    phone: string,
    deliveryType: DeliveryType,
    homeAddress?: string



}
export function generateOrder(options: GenerateOrderOptions): Repository.Order {

    const { cart, destination, phone, customer,homeAddress,deliveryType } = options

    const header: Repository.OrderHeader = {
        id: uuidv4(),
        status: EOrderStatus.onHold,
        createdAt: Date(),
        total: cart.length
    }

    const address = deliveryType.isDeliverHome ? `${destination.name} ${homeAddress}` : destination.name

    const shipping: Repository.Contacts = {
        city: address,
        customer,
        phone
    }



    return {
        header,
        shipping,
        items : cart
    }
}