import router from "next/dist/client/router";
import { OrderRowEntity } from "../domain/TableEntity";


export class TableController{
    constructor(){}

    handleRowClick(row : OrderRowEntity){
        router.push(
            `/admin/orders/${row.orderHeader.id.value}`,
        )
    }
}