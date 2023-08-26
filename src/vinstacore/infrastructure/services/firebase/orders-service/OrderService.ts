import { UpdatedField } from "@vinstacore/commons/api.base";
import { OrderId, OrderMapper, } from "@vinstacore/domains/orders";
import { CategoryServicePort, ProductServicePort } from "@vinstacore/infrastructure/ports";
import { CancelOrderProps, CancelOrderResponse, CreateOrderRawProps, CreateOrderResponse, DeleteOrderRawProps, DeleteOrderResponse, FindOrderRawProps, FindOrderResponse, LoadOrderRawProps, LoadOrderResponse, OrderServicePort, UpdateOrderRawProps, UpdateOrderResponse } from "@vinstacore/infrastructure/ports/services/OrdersServicePort";
import { FirebaseOrderRepository } from "./OrderRepostiroy";


export class FirebaseOrderService implements OrderServicePort {


    constructor(private readonly ordersRepo: FirebaseOrderRepository,
        private readonly orderMapper: OrderMapper,
        private readonly productService: ProductServicePort,
        private readonly categoryService: CategoryServicePort) {

    }

    async cancel(options: CancelOrderProps): Promise<CancelOrderResponse> {

        const order = (await this.find({
            orderId: options.orderId
        })).data

        order.items.forEach(product => {
            let images = (product.images ?? [])
                .map((image, index) => {
                    return {
                        id: index,
                        url: image
                    }
                })

            this.productService.create({
                productId: product.productId,
                categoryId: product.categoryId,
                product: {
                    id: product.productId,
                    quantity: product.quantity,
                    name: product.name,
                    price: product.price,
                    imageUrls: images,
                    size: product.size,
                    color: product.color
                }
            })
        })

        return this.delete({
            orderId: options.orderId
        })
    }

    async find(options: FindOrderRawProps): Promise<FindOrderResponse> {



        return this.ordersRepo.find(
            {
                orderId: new OrderId(options.orderId)
            }
        )
    }

    async create(options: CreateOrderRawProps): Promise<CreateOrderResponse> {

        this.updateProductListings(options);


        return this.ordersRepo.create({
            orderId: new OrderId(options.orderId),
            order: this.orderMapper.toDomain(options.order)
        }
        )

    }

    private async updateProductListings(options: CreateOrderRawProps) {
        const updatedCategories: { [key: string]: { total: number; items: string[]; }; } = {};

        options.order.items.forEach(item => {
            let category = updatedCategories[item.categoryId];

            if (category === undefined) {
                category = {
                    total: item.quantity,
                    items: [item.productId]
                };
                updatedCategories[item.categoryId] = category;

            }
            else {
                category.total += item.quantity;
                category.items.push(item.productId);
            }
        });

        for (const categoryId in updatedCategories) {
            const category = updatedCategories[categoryId];
            this.categoryService.increment({
                id: categoryId,
                quantity:category.total,


            });

            category.items.forEach(productId => this.productService.delete({
                productId: productId,
                categoryId: categoryId
            })
            );
        }
    }

    async update(options: UpdateOrderRawProps): Promise<UpdateOrderResponse> {

        const updatedFields = options.updatedFields.map((field: any) => {
            return new UpdatedField(field.fieldName, field.newValue)
        })

        return this.ordersRepo.update(
            {
                orderId: new OrderId(options.orderId),
                updatedFields: updatedFields
            }
        )
    }
    async delete(options: DeleteOrderRawProps): Promise<DeleteOrderResponse> {

        return this.ordersRepo.delete(
            { orderId: new OrderId(options.orderId) }
        )
    }

    async load(options: LoadOrderRawProps): Promise<LoadOrderResponse> {
        return this.ordersRepo.load(
            {}
        )
    }

}