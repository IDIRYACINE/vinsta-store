import { Repository } from "vinstacore/src";

interface DeleteProductApiOptions {
  productId: string;
  categoryId: string | number;
}

interface CreateProductApiOptions {
  categoryId: string | number;
  productId : string | number;
  product: Repository.Product;
}




export async function createProductApi(options: CreateProductApiOptions) {
  const response = await fetch("/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function updateProductApi(options: CreateProductApiOptions) {
  const response = await fetch("/api/product", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function deleteProductApi(options: DeleteProductApiOptions) {
  const response = await fetch(`/api/product?productId=${options.productId}cateoryId=${options.categoryId}`, {
    method: "DELETE",
  });

  return response.json();
}

