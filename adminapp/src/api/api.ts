import { Repository } from "vinstacore/src";


export async function createCategoryApi(options: Repository.Category) {
  const response = await fetch("/api/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function updateCategoryApi(options: Repository.Category) {
  const response = await fetch("/api/category", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function deleteCategoryApi(categoryId: string | undefined) {
  if(!categoryId) return;

  const response = await fetch(`/api/category?categoryId=${categoryId}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function createProductApi(options: Repository.Product) {
  const response = await fetch("/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function updateProductApi(options: Repository.Product) {
  const response = await fetch("/api/product", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function deleteProductApi(productId: string) {
  const response = await fetch(`/api/product?productId=${productId}`, {
    method: "DELETE",
  });

  return response.json();
}


export async function updateOrderApi(options: Repository.Order) {
  const response = await fetch("/api/order", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}
