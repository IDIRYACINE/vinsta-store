import { OrderEntity } from "@vinstacore/domains/orders"
import { OrderId } from "@vinstacore/domains/orders/domain/ValueObjects"
import { Repository } from "../IRepositories"


export interface OrderServicePort {
    create(options: CreateOrderRawProps): Promise<CreateOrderResponse>
    update(options: UpdateOrderRawProps): Promise<UpdateOrderResponse>
    delete(options: DeleteOrderRawProps): Promise<DeleteOrderResponse>
    load(options: LoadOrderRawProps): Promise<LoadOrderResponse>
    cancel(options: CancelOrderRawProps): Promise<CancelOrderResponse>
    find(options: FindOrderRawProps): Promise<FindOrderResponse> 

}

export interface CreateOrderProps {
    orderId: OrderId,
    order: OrderEntity
}

export interface UpdateOrderProps {
    orderId: OrderId,
    updatedFields: Partial<Repository.Order>

}
export interface DeleteOrderProps {
    orderId: OrderId
}

export interface FindOrderProps {
    orderId: OrderId
}

export interface CancelOrderProps {
    orderId:string
 }

export interface LoadOrderProps { }

export interface CreateOrderRawProps {
    orderId: string,
    order: Repository.Order
}

export interface UpdateOrderRawProps {
    orderId: string,
    updatedFields: any

}
export interface DeleteOrderRawProps {
    orderId: string
}

export interface FindOrderRawProps {
    orderId: string
}


export interface CancelOrderRawProps { }

export interface LoadOrderRawProps { }

export interface CreateOrderResponse { }

export interface UpdateOrderResponse { }

export interface DeleteOrderResponse { }

export interface CancelOrderResponse { }

export interface LoadOrderResponse {
    data:  Repository.OrderTreasure[],
    
}


export interface FindOrderResponse {
    data : Repository.Order 
}


export interface IOrderRepostiroy {
    create(createProps: CreateOrderProps): Promise<CreateOrderResponse>
    update(updateProps: UpdateOrderProps): Promise<UpdateOrderResponse>
    delete(deleteProps: DeleteOrderProps): Promise<DeleteOrderResponse>
    load(loadProps: LoadOrderProps): Promise<LoadOrderResponse>
    find(findProps: FindOrderProps): Promise<FindOrderResponse>
}
