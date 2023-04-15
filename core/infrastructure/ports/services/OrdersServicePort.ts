import { OrderId } from "@/domains/orders/domain/ValueObjects"


export interface OrderServicePort{
    create(createProps:CreateOrderProps) : Promise<CreateOrderResponse>
    update(updateProps:UpdateOrderProps) : Promise<UpdateOrderResponse>
    delete(deleteProps:DeleteOrderProps) : Promise<DeleteOrderResponse>
    load(loadProps:LoadOrderProps) : Promise<LoadOrderResponse>
    confirm(confirmProps:ConfirmOrderProps) : Promise<ConfirmOrderResponse>
}

export interface CreateOrderProps{
    id : OrderId
}

export interface UpdateOrderProps{}
export interface DeleteOrderProps{}
export interface CreateOrderResponse{}
export interface UpdateOrderResponse{}
export interface ConfirmOrderProps{}
export interface DeleteOrderResponse{}
export interface ConfirmOrderResponse{}
export interface LoadOrderResponse{}
export interface LoadOrderProps{}
