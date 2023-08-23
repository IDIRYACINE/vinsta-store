import { Repository } from "..";
import {baseUrl, isTest} from "./config"

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

const baseApi = `${baseUrl}/api/product`;


export async function createProductApi(options: CreateProductApiOptions) {
  const response = await fetch(baseApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function updateProductApi(options: CreateProductApiOptions) {
  const response = await fetch(baseApi, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function deleteProductApi(options: DeleteProductApiOptions) {
  const response = await fetch(`${baseApi}?productId=${options.productId}&&categoryId=${options.categoryId}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function loadProductsApi(options: LoadProductsApiOptions): Promise<Repository.Product[]> {
  if(isTest){
    const resTest =  (await fetch("http://localhost:3000/testData/products.json",{ cache: 'no-store' }));
    const temp = await resTest.json()
    return temp.results
  }

  if(options.categoryId === null){
    return []
  }

   

  let response = await fetch(`${baseApi}?categoryId=${options.categoryId}`, {
    method: "GET",


  });


  let json = await response.json();

  return json.data.results;
}
