import { Repository } from "..";
import { baseUrl } from "./config";

interface DeleteOrderApiOptions {
    orderId: string | number;
    dateId : string | number;
}

interface DeleteOrderSegmentApiOptions {
    dateId: string | number;
}

interface RestockOrderApiOptions{
    dateId:string | number;
    orderId:string | number;
    items:Repository.OrderItem[]
}

interface CancelOrderApiOptions{
    dateId:string | number;
    orderId:string | number;
}

type PartialOrder = Omit<Repository.Order, "header" | "shipping" | "items"> & {
    header?: Partial<Repository.OrderHeader>;
    shipping?: Partial<Repository.Contacts>;
    items?: Partial<Repository.OrderItem>[];
};


interface UpdateOrderStatusApiOptions {
    orderId: string | number;
    orderStatus: string,
    dateId:string
}
interface CreateOrderApiOptions {
    order: Repository.Order;
    orderId: string | number;
}

interface LoadOrderStatusApiOptions {
    orderId: string | number;
    dateId:string|number
}

export const baseOrderApi = `${baseUrl}/api/order`


export async function findOrderStatusApi(props: LoadOrderStatusApiOptions): Promise<string> {
    const targetUrl = `${baseOrderApi}/${props.orderId}?dateId=${props.dateId}`
    let response = await fetch(targetUrl, {
        method: "GET",

    });

    let json = await response.json();

    return json.data.status;
}

export async function loadOrdersApi(): Promise<Repository.OrderTreasure[]> {
    let response = await fetch(baseOrderApi, {
        method: "GET",
    });

    let json = await response.json();

    return json.data;
}


export async function createOrderApi(options: CreateOrderApiOptions) {
    const response = await fetch(baseOrderApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}

export async function updateOrderStatusApi(options: UpdateOrderStatusApiOptions) {
    const response = await fetch(baseOrderApi, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}

export async function deleteOrderApi(options: DeleteOrderApiOptions) {
    const response = await fetch(`${baseOrderApi}?orderId=${options.orderId}&&dateId=${options.dateId}`, {
        method: "DELETE",
    });

    return response.json();
}

export async function deleteOrderSegmentApi(options:DeleteOrderSegmentApiOptions){
    const response = await fetch(`${baseOrderApi}?dateId=${options.dateId}`, {
        method: "DELETE",
    });

    return response.json();
}


export async function restockOrderApi(options: RestockOrderApiOptions) {
    const response = await fetch(`${baseOrderApi}/restock`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}


export async function claimOrderApi(options: RestockOrderApiOptions) {
    const response = await fetch(`${baseOrderApi}/claim`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}

export async function cancelOrderApi(options: CancelOrderApiOptions) {
    const response = await fetch(`${baseOrderApi}/cancel`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}