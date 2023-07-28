import { buildFirebaseApp } from "./builders/FirebaseBuilder";
import { buildOrderService } from "./builders/OrderServiceBuilder";
import { buildCategoryService, buildProductService } from "./builders/ProductServiceBuilder";
import { buildUserService } from "./builders/UserServiceBuilder";




export module FirebaseAdapter {
    export const userService = () => buildUserService(buildFirebaseApp())
    export const productService = () => buildProductService(buildFirebaseApp())
    export const categoryService = () => buildCategoryService(buildFirebaseApp())
    export const ordersService = () => buildOrderService(buildFirebaseApp())

}