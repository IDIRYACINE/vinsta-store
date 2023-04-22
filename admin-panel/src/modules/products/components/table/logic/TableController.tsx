import router from "next/dist/client/router";
import { ProductEntity } from "@vinstacore";


export class TableController{
    constructor(){}

    handleRowClick(row : ProductEntity){
        router.push(
            `/admin/products/${row.id.value}`,
        )
    }
}