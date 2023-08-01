import { Repository } from '@vinstacore/infrastructure/ports/IRepositories'


export class OrderId {
    constructor(public readonly value: string) { }

    static fromString(value: string): OrderId {
        return new OrderId(value)
    }
}

export enum EOrderStatus { confirmed = "confirmed", declined = "declined", cancelled = "cancelled", onHold = "onHold" }

export class OrderStatus {
    constructor(public readonly value: EOrderStatus) { }

    static fromString(value: string): OrderStatus {
        switch (value) {
            case 'confirmed':
                return new OrderStatus(EOrderStatus.confirmed)
            case 'declined':
                return new OrderStatus(EOrderStatus.declined)
            case 'cancelled':
                return new OrderStatus(EOrderStatus.cancelled)
            case 'onHold':
                return new OrderStatus(EOrderStatus.onHold)
            default:
                throw new Error('Invalid order status')
        }
    }
}

export class OrderItem {
    constructor(
        public readonly productId: string,
        public readonly quantity: number,
        public readonly categoryId: string,
        public readonly price: number,
        public readonly name: string,
    ) { }

    static OrderItemFromPersistence(persistence: Repository.OrderItem): OrderItem {
        return new OrderItem(
            persistence.productId,
            persistence.quantity,
            persistence.categoryId,
            persistence.price,
            persistence.name
        )
    }
}

export class OrderDate {
    constructor(public readonly value: Date) { }

    static fromString(value: string): OrderDate {
        return new OrderDate(new Date(value))
    }

}

export class OrderTotalPrice {
    constructor(public readonly value: number) { }

    static fromString(value: string): OrderTotalPrice {
        return new OrderTotalPrice(parseFloat(value))
    }
}