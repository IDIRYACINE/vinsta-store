import { OrderMapper } from "@vinstacore/domains/orders";
import { CreateResponse, DeleteResponse, Repository, UpdateResponse } from "@vinstacore/infrastructure/ports";
import { CreateOrderProps, DeleteOrderProps, IOrderRepostiroy, FindOrderProps, LoadOrderProps, LoadOrderResponse, UpdateOrderProps, FindOrderResponse } from "@vinstacore/infrastructure/ports/services/OrdersServicePort";

import { Database, get, ref, remove, set, update } from "firebase/database";


export class FirebaseOrderRepository implements IOrderRepostiroy {

    orderCollection = "orders"

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
            const results: Repository.Order[] = [];

            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val() as Repository.Order;
                results.push(data);
            });

            return {
                data:
                    results,

            };
        });
    }

    async create(options: CreateOrderProps): Promise<CreateResponse> {


        const orderRef = ref(this.db, `${this.orderCollection}/${options.orderId.value}`)

        const order: Repository.Order = this.mapper.toPersistence(options.order)

        return set(orderRef, order).then(() => {
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
