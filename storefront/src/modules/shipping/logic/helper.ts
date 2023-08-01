import { EOrderStatus, Repository } from "@vinstacore";
import { v4 as uuidv4 } from 'uuid';


interface GenerateOrderOptions {
    cart: Repository.OrderItem[],
    destination: Repository.Destination,
    customer: string,
    phone: string,



}
export function generateOrder(options: GenerateOrderOptions): Repository.Order {

    const { cart, destination, phone, customer } = options

    const header: Repository.OrderHeader = {
        id: uuidv4(),
        status: EOrderStatus.onHold,
        createdAt: Date(),
        total: cart.length
    }

    const shipping: Repository.Contacts = {
        city: destination.name,
        customer,
        phone
    }



    return {
        header,
        shipping,
        items : cart
    }
}