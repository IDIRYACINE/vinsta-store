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

const baseApi = `${baseUrl}/api/order`


export async function findOrderStatusApi(props: LoadOrderStatusApiOptions): Promise<string> {
    const targetUrl = `${baseApi}/${props.orderId}?dateId=${props.dateId}`
    let response = await fetch(targetUrl, {
        method: "GET",

    });

    let json = await response.json();

    return json.data.status;
}

export async function loadOrdersApi(): Promise<Repository.OrderTreasure[]> {
    let response = await fetch(baseApi, {
        method: "GET",
    });

    let json = await response.json();

    return json.data;
}


export async function createOrderApi(options: CreateOrderApiOptions) {
    const response = await fetch(baseApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}

export async function updateOrderStatusApi(options: UpdateOrderStatusApiOptions) {
    const response = await fetch(baseApi, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}

export async function deleteOrderApi(options: DeleteOrderApiOptions) {
    const response = await fetch(`${baseApi}?orderId=${options.orderId}&&dateId=${options.dateId}`, {
        method: "DELETE",
    });

    return response.json();
}

export async function deleteOrderSegmentApi(options:DeleteOrderSegmentApiOptions){
    const response = await fetch(`${baseApi}?dateId=${options.dateId}`, {
        method: "DELETE",
    });

    return response.json();
}


export async function restockOrderApi(options: RestockOrderApiOptions) {
    const response = await fetch(`${baseApi}/reclaim`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}