import { Destination } from "./AddressEntity"
import { rawDestinations } from "./RawDestinations"


export enum DeliveryTypeEnum {
    PICKUP = 'PICKUP',
    DELIVERY = 'DELIVERY'
}

export class DeliveryType {

    constructor(public readonly type: DeliveryTypeEnum,public readonly id :string) { }


    get name() { return this.type.valueOf() }

    get isDeliverHome() { return this.type === DeliveryTypeEnum.DELIVERY }

    static values(): DeliveryType[] {
        return [
            new DeliveryType(DeliveryTypeEnum.PICKUP,'DeliveryType1'),
            new DeliveryType(DeliveryTypeEnum.DELIVERY,'DeliveryType2')
        ]
    }


}

export function calculateDeliveryPrice(deliveryType: DeliveryType, destination : Destination): number {
    
    const target = rawDestinations[destination.id - 1]
    if (deliveryType.isDeliverHome) {
        return target.Home
    }
    
    return target.Delivery;
}