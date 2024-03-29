import { OrderMapper } from "@vinstacore/domains/orders";
import { CreateResponse, DeleteResponse, Repository, UpdateResponse } from "@vinstacore/infrastructure/ports";
import { CreateOrderProps, DeleteOrderProps, IOrderRepostiroy, FindOrderProps, LoadOrderProps, LoadOrderResponse, UpdateOrderStatusProps, FindOrderResponse, DeleteOrderResponse, DeleteOrderSegmentProps, FindOrderStatusResponse, MarkReclaimOrderProps, ReclaimOrderResponse } from "@vinstacore/infrastructure/ports/services/OrdersServicePort";

import { Database, get, ref, remove, set, update } from "firebase/database";


export class FirebaseOrderRepository implements IOrderRepostiroy {

    orderCollection = "orders"
    statusCollection = "ordersStatus"

    public constructor(private readonly db: Database,
        private readonly mapper: OrderMapper,


    ) {


    }

    async findOrderStatus(options: FindOrderProps): Promise<FindOrderStatusResponse> {

        const statusRef = ref(this.db, `${this.statusCollection}/${options.dateId}/${options.orderId.value}`);

        const status: string = (await get(statusRef)) as unknown as string

        return {
            data: status
        }
    }

    async load(options: LoadOrderProps): Promise<LoadOrderResponse> {
        const ordersRef = ref(this.db, `${this.orderCollection}`)

        return get(ordersRef).then((snapshot) => {

            const result: Repository.OrderTreasure[] = []


            snapshot.forEach((childSnapshot) => {
                const orders: Repository.Order[] = []
                const data = childSnapshot.val() as Map<string, object>

                try {

                    const iterable = Object.entries(data);

                    for (const entry of iterable) {
                        orders.push(entry[1] as Repository.Order)
                    }

                }
                catch (e) {
                    console.log(e)
                }

                const treasure = {
                    id: childSnapshot.key,
                    orders: orders
                }

                result.push(treasure);
            });

            return {
                data:
                    result,

            };
        });
    }

    async create(options: CreateOrderProps): Promise<CreateResponse> {

        const dateId = options.order.dateId()
        const orderRef = ref(this.db, `${this.orderCollection}/${dateId}/${options.orderId.value}`)

        const order: Repository.Order = this.mapper.toPersistence(options.order)

        return set(orderRef, order).then(() => {

            const statusRef = ref(this.db, `${this.statusCollection}/${dateId}/${options.orderId.value}`)
            const status = {
                status: order.header.status,
            }

            set(statusRef, status)

            return {}

        })

    }

    async updateOrderStatus(options: UpdateOrderStatusProps): Promise<UpdateResponse> {
        const statusRef = ref(this.db, `${this.statusCollection}/${options.dateId}/${options.orderId.value}`)

        const orderRef = ref(this.db, `${this.orderCollection}/${options.dateId}/${options.orderId.value}/header/status`)

        const newHeader: Partial<Repository.OrderHeader> = {
            status: options.orderStatus
        }



        set(orderRef, newHeader.status)

        return update(statusRef, newHeader).then(() => ({}));
    }


    async markReclaimed(options: MarkReclaimOrderProps): Promise<ReclaimOrderResponse> {

        const orderRef = ref(this.db, `${this.orderCollection}/${options.dateId}/${options.orderId}/header/restocked`)

        set(orderRef, true)
        return {}
    }

    async delete(options: DeleteOrderProps): Promise<DeleteResponse> {
        const orderRef = ref(this.db, `${this.orderCollection}/${options.orderId.value}`)

        return remove(orderRef).then(() => ({}));
    }


    async deleteSegment(options: DeleteOrderSegmentProps): Promise<DeleteOrderResponse> {
        const orderRef = ref(this.db, `${this.orderCollection}/${options.dateId}`)
        const statusRef = ref(this.db, `${this.statusCollection}/${options.dateId}`)

        remove(statusRef)

        return remove(orderRef).then(() => ({}));
    }
}
