import { buildOrderService } from "./builders/OrderServiceBuilder";
import { buildCategoryService, buildProductService } from "./builders/ProductServiceBuilder";
import { buildUserService } from "./builders/UserServiceBuilder";



export module FirebaseAdapter {
    export const userService = () => buildUserService()
    export const productService = () => buildProductService()
    export const categoryService = () => buildCategoryService()
    export const ordersService = () => buildOrderService()

}