import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { ClientRoutes, navigateReplace, Repository } from "@vinstacore/index";

export function goBack(router:AppRouterInstance){
    navigateReplace(router,ClientRoutes.products)
}

export function convertProductToCartItem(product : Repository.Product,categoryId:any) :Repository.OrderItem {
    return {
        productId: product.id,
        quantity: product.quantity,
        price: product.price,
        categoryId: categoryId,
        color :product.color,
        size : product.size,
        name: product.name,
        images: product.imageUrls?.map(image => image.url) ?? []
    }
}