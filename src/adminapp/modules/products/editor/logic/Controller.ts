
import { Repository,navigateReplace,AdminRoutes } from "@vinstacore/index";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


interface createProductOptions {
    name: string,
    description?: string,
    imageUrls: string[],
    code: string,
    color: {id:number,color:string},
    size:{id:number,size:string},
    price: number,
    quantity: number
}

export class ProductEditorController {



    public cancel() {


    }

    public createProduct(options: createProductOptions): Repository.Product {
        let product = {
            id: options.code,
            name: options.name,
            price: options.price,
            quantity: options.quantity,
            color : options.color,
            size : options.size,
            description: options.description,
            imageUrls: options.imageUrls.map((url, index) => {
                return {
                    id: index,
                    url: url
                }
            })
        }


        return product

    }

    public updateProduct(options: createProductOptions): Repository.Product {

        let product ={
            id: options.code,
            name: options.name,
            price: options.price,
            size :options.size,
            color:options.color,
            quantity: options.quantity,
            description: options.description,
            imageUrls: options.imageUrls.map((url, index) => {
                return {
                    id: index,
                    url: url
                }
            })
        }


        return product

    }

}


export function goBack(router:AppRouterInstance){
    navigateReplace(router,AdminRoutes.products)
}