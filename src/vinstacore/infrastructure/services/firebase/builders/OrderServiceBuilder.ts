



import { OrderMapper, } from "@vinstacore/domains/orders";
import { OrderServicePort } from "@vinstacore/infrastructure/ports";
import { getDatabase } from "firebase/database";
import { FirebaseOrderRepository } from "../orders-service/OrderRepostiroy";
import { FirebaseOrderService } from "../orders-service/OrderService";
import { buildFirebaseApp } from "./FirebaseBuilder";
import { buildCategoryService, buildProductService } from "./ProductServiceBuilder";

let orderService: FirebaseOrderService;

export function buildOrderService(): OrderServicePort {
    if (orderService !== undefined) {
        return orderService;
    }

    const firebaseApp = buildFirebaseApp()

    const db = getDatabase(firebaseApp)

    const productService = buildProductService()
    const categoryService = buildCategoryService()
    const orderMapper = new OrderMapper();

    const orderRepo = new FirebaseOrderRepository(db, orderMapper,);

    orderService = new FirebaseOrderService(
        orderRepo,
        orderMapper, productService, categoryService

    );

    return orderService;
}


