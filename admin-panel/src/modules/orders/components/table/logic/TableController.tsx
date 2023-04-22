import router from "next/dist/client/router";
import { OrderRow } from "../domain/TableEntity";


export class TableController{
    constructor(){}

    handleRowClick(row : OrderRow){
        router.push(
            `/admin/orders/${row.orderHeader.id.value}`,
        )
    }
}