import { CategoryServicePort } from "./services/CategoryServicePort";
import { OrderServicePort } from "./services/OrdersServicePort";
import { ProductServicePort } from "./services/ProductServicePort";
import { UserServicePort } from "./services/UserServicePort";


export interface IServicesGateway{
    userService : () => UserServicePort
    orderService : () => OrderServicePort
    categoryService: () => CategoryServicePort
    productService : () => ProductServicePort
}