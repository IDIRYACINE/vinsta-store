import { OrderEntity } from "@vinstacore/domains/orders"
import { OrderId } from "@vinstacore/domains/orders/domain/ValueObjects"
import { Repository } from "../IRepositories"


export interface OrderServicePort {
    create(options: CreateOrderRawProps): Promise<CreateOrderResponse>
    updateOrderStatus(options: UpdateOrderRawProps): Promise<UpdateOrderResponse>
    deleteSegment(options: DeleteOrderRawProps): Promise<DeleteOrderResponse>
    load(options: LoadOrderRawProps): Promise<LoadOrderResponse>
    reclaim(options: ReclaimOrderRawProps): Promise<ReclaimOrderResponse>
    trackOrderstatus(options: FindOrderRawProps): Promise<FindOrderStatusResponse> 

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
    dateId:string
}

export interface ReclaimOrderProps {
    orderId:string,
    dateId:string,
    items: Repository.OrderItem[]
 }

 export interface MarkReclaimOrderProps{
    orderId:string,
    dateId:string,
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
    orderId: string,
    dateId:string
}


export interface ReclaimOrderRawProps { }

export interface LoadOrderRawProps { }

export interface CreateOrderResponse { }

export interface UpdateOrderResponse { }

export interface DeleteOrderResponse { }

export interface ReclaimOrderResponse { }

export interface LoadOrderResponse {
    data:  Repository.OrderTreasure[],
    
}


export interface FindOrderResponse {
    data : Repository.Order 
}


export interface FindOrderStatusResponse {
    data : string
}


export interface IOrderRepostiroy {
    create(createProps: CreateOrderProps): Promise<CreateOrderResponse>
    updateOrderStatus(updateProps: UpdateOrderStatusProps): Promise<UpdateOrderResponse>
    delete(deleteProps: DeleteOrderProps): Promise<DeleteOrderResponse>
    deleteSegment(deleteProps: DeleteOrderSegmentProps): Promise<DeleteOrderResponse>
    load(loadProps: LoadOrderProps): Promise<LoadOrderResponse>
    findOrderStatus(findProps: FindOrderProps): Promise<FindOrderStatusResponse>
    markReclaimed(reclaimProps: MarkReclaimOrderProps): Promise<ReclaimOrderResponse>
}
