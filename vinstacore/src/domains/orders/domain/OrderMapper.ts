import { MapperBase } from "@vinstacore/commons/mappers.base";
import { Contact, City } from "@vinstacore/domains/address";
import { UserPhone, UserName } from "@vinstacore/domains/users";
import { Repository, } from "@vinstacore/infrastructure/ports/IRepositories";
import { OrderEntity, OrderHeader } from "./OrderEntity";
import { OrderDate, OrderId, OrderItem, OrderStatus, OrderTotalPrice } from "./ValueObjects";


export class OrderMapper implements MapperBase<OrderEntity, Repository.Order>{

    toDomain(raw: Repository.Order): OrderEntity {
        const header = new OrderHeader(
            OrderId.fromString(raw.header.id),
            OrderStatus.fromString(raw.header.status),
            OrderDate.fromString(raw.header.createdAt),
            new OrderTotalPrice(raw.header.total)
        )

        const shipping = new Contact(
            City.fromString(raw.shipping.city),
            new UserPhone(raw.shipping.phone),
            new UserName(raw.shipping.customer)
        )

        const items = raw.items.map(item => {
            return OrderItem.OrderItemFromPersistence(item)
        })

        return new OrderEntity(
            header,
            shipping,
            items
        );
    }

    toPersistence(domain: OrderEntity): Repository.Order {
        const items = domain.items.map(item => {
            return {
                productId: item.productId,
                quantity: item.quantity,
                price: item.price,
                categoryId: item.categoryId,
                name: item.name,
                size : item.size,
                color :item.color
                
            }
        })
        return {
            header: {
                id: domain.header.id.value.toString(),
                status: domain.header.status.value.toString(),
                createdAt: domain.header.createdAt.value.toString(),
                total: domain.header.total.value
            },
            shipping: {
                city: domain.shipping.city.value,
                customer: domain.shipping.customer.value,
                phone: domain.shipping.phone.value,
            },
            items: items
        }
    }

}

