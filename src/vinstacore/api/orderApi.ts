import { Repository } from "..";
import { baseUrl } from "./config";

interface DeleteOrderApiOptions {
    orderId: string | number;
}


type PartialOrder = Omit<Repository.Order, "header" | "shipping" | "items"> & {
    header?: Partial<Repository.OrderHeader>;
    shipping?: Partial<Repository.Contacts>;
    items?: Partial<Repository.OrderItem>[];
};


interface UpdateOrderApiOptions {
    orderId: string | number;
    updatedFields: PartialOrder;
}
interface CreateOrderApiOptions {
    order: Repository.Order;
    orderId: string | number;
}

interface LoadOrderApiOptions {
    orderId?: string | number;
}

const baseApi = `${baseUrl}/api/order`


export async function findOrderApi(props: LoadOrderApiOptions): Promise<Repository.Order> {
    const targetUrl = `${baseApi}/${props.orderId}`
    let response = await fetch(targetUrl, {
        method: "GET",

    });

    let json = await response.json();

    return json.data;
}

export async function loadOrdersApi(): Promise<Repository.Order[]> {
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

export async function updateOrderApi(options: UpdateOrderApiOptions) {
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
    const response = await fetch(`${baseApi}?OrderId=${options.orderId}`, {
        method: "DELETE",
    });

    return response.json();
}
