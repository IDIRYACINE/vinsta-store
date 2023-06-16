import { Repository } from "vinstacore/src";

interface DeleteProductApiOptions {
  productId: string;
  categoryId: string | number;
}

interface CreateProductApiOptions {
  categoryId: string | number;
  productId: string | number;
  product: Repository.Product;
}

interface LoadProductsApiOptions {
  categoryId: string | number
}

const baseUrl = "/api/product";


export async function createProductApi(options: CreateProductApiOptions) {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function updateProductApi(options: CreateProductApiOptions) {
  const response = await fetch(baseUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function deleteProductApi(options: DeleteProductApiOptions) {
  const response = await fetch(`${baseUrl}?productId=${options.productId}cateoryId=${options.categoryId}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function loadProductsApi(options: LoadProductsApiOptions): Promise<Repository.Product[]> {
  let response = await fetch(`${baseUrl}?categoryId=${options.categoryId}`, {
    method: "GET",
  });

  let json = await response.json();

  return json.data;
}