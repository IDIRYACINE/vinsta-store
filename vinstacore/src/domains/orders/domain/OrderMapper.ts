import { MapperBase } from "@vinstacore/commons/mappers.base";
import { Address, City, CitySub } from "@vinstacore/domains/address";
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

        const shipping = new Address(
            City.fromString(raw.shipping.city),
            CitySub.fromString(raw.shipping.subCity)
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
                subCity: domain.shipping.subCity.value
            },
            items: items
        }
    }

}