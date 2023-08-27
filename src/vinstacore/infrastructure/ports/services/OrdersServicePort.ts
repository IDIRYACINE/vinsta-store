import { OrderEntity } from "@vinstacore/domains/orders"
import { OrderId } from "@vinstacore/domains/orders/domain/ValueObjects"
import { Repository } from "../IRepositories"


export interface OrderServicePort {
    create(options: CreateOrderRawProps): Promise<CreateOrderResponse>
    updateOrderStatus(options: UpdateOrderRawProps): Promise<UpdateOrderResponse>
    deleteSegment(options: DeleteOrderRawProps): Promise<DeleteOrderResponse>
    load(options: LoadOrderRawProps): Promise<LoadOrderResponse>
    cancel(options: CancelOrderRawProps): Promise<CancelOrderResponse>
    find(options: FindOrderRawProps): Promise<FindOrderResponse> 

}

export interface CreateOrderProps {
    orderId: OrderId,
    order: OrderEntity
}

export interface UpdateOrderStatusProps {
    orderId: OrderId,
    orderStatus: string
    dateId:string

}
export interface DeleteOrderProps {
    orderId: OrderId
}

export interface DeleteOrderSegmentProps{
    dateId:string
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
    orderStatus: string,
    dateId:string

}
export interface DeleteOrderRawProps {
    dateId: string
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
    updateOrderStatus(updateProps: UpdateOrderStatusProps): Promise<UpdateOrderResponse>
    delete(deleteProps: DeleteOrderProps): Promise<DeleteOrderResponse>
    deleteSegment(deleteProps: DeleteOrderSegmentProps): Promise<DeleteOrderResponse>
    load(loadProps: LoadOrderProps): Promise<LoadOrderResponse>
    find(findProps: FindOrderProps): Promise<FindOrderResponse>
}
