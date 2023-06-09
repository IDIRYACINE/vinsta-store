



import { FirebaseApp } from "@firebase/app";
import { OrderMapper, OrderServicePort, } from "@vinstacore/index";
import { getDatabase } from "firebase/database";
import { FirebaseOrderRepository } from "../orders-service/OrderRepostiroy";
import { FirebaseOrderService } from "../orders-service/OrderService";
import { buildCategoryService, buildProductService } from "./ProductServiceBuilder";

let orderService: FirebaseOrderService;

export function buildOrderService(firebaseApp: FirebaseApp): OrderServicePort {
    if (orderService !== undefined) {
        return orderService;
    }
    const db = getDatabase(firebaseApp)

    const productService = buildProductService(firebaseApp)
    const categoryService = buildCategoryService(firebaseApp)
    const orderMapper = new OrderMapper();

    const orderRepo = new FirebaseOrderRepository(db, orderMapper,);

    orderService = new FirebaseOrderService(
        orderRepo,
        orderMapper, productService, categoryService

    );

    return orderService;
}


