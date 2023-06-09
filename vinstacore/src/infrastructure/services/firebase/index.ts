import { buildFirebaseApp } from "./builders/FirebaseBuilder";
import { buildOrderService } from "./builders/OrderServiceBuilder";
import { buildCategoryService, buildProductService } from "./builders/ProductServiceBuilder";
import { buildUserService } from "./builders/UserServiceBuilder";



const firebaseApp = buildFirebaseApp()

export module FirebaseAdapter {
    export const userService = () => buildUserService(firebaseApp)
    export const productService = () => buildProductService(firebaseApp)
    export const categoryService = () => buildCategoryService(firebaseApp)
    export const ordersService = () => buildOrderService(firebaseApp)

}