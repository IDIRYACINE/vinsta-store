import { OrderMapper } from "@vinstacore/domains/orders";
import { CreateResponse, DeleteResponse, Repository, UpdateResponse } from "@vinstacore/infrastructure/ports";
import { CreateOrderProps, DeleteOrderProps, IOrderRepostiroy, FindOrderProps, LoadOrderProps, LoadOrderResponse, UpdateOrderProps, FindOrderResponse } from "@vinstacore/infrastructure/ports/services/OrdersServicePort";

import { Database, get, ref, remove, set, update } from "firebase/database";


export class FirebaseOrderRepository implements IOrderRepostiroy {

    orderCollection = "orders"
    statusCollection = "ordersStatus"

    public constructor(private readonly db: Database,
        private readonly mapper: OrderMapper,


    ) {


    }

    async find(options: FindOrderProps): Promise<FindOrderResponse> {

        const ordersRef = ref(this.db, `${this.orderCollection}/${options.orderId.value}`);

        const order: Repository.Order = (await get(ordersRef)) as unknown as Repository.Order

        return {
            data: order
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

            const statusRef = ref(this.db, `${this.statusCollection}/${options.orderId.value}`)
            const status = {
                status: order.header.status,
            }

            set(statusRef, status)

            return {}

        })

    }

    async update(options: UpdateOrderProps): Promise<UpdateResponse> {
        const orderRef = ref(this.db, `${this.orderCollection}/${options.orderId.value}`)

        const updateData: Partial<Repository.Order> = options.updatedFields;


        return update(orderRef, updateData).then(() => ({}));
    }

    async delete(options: DeleteOrderProps): Promise<DeleteResponse> {
        const orderRef = ref(this.db, `${this.orderCollection}/${options.orderId.value}`)

        return remove(orderRef).then(() => ({}));
    }
}
