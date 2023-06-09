import { Repository } from "vinstacore/src";

interface DeleteOrderApiOptions {
    orderId: string | number;
}

interface CreateOrderApiOptions {
    order: Repository.Order;
}

const baseUrl = `/api/Order`


export async function loadOrdersApi() {
    let response = await fetch(baseUrl, {
        method: "GET",
    });

    let json = await response.json();

    return json.data;
}


export async function createOrderApi(options: CreateOrderApiOptions) {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}

export async function updateOrderApi(options: DeleteOrderApiOptions) {
    const response = await fetch(baseUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    return response.json();
}

export async function deleteOrderApi(options: DeleteOrderApiOptions) {
    const response = await fetch(`/api/Order?OrderId=${options.orderId}`, {
        method: "DELETE",
    });

    return response.json();
}

