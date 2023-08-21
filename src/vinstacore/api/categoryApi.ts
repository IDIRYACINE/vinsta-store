import { Repository } from "..";
import {baseUrl, isTest} from "./config"



const baseApi = `${baseUrl}/api/category}`

export async function createCategoryApi(options: Repository.Category) {
  const response = await fetch(baseApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function updateCategoryApi(options: Repository.Category) {
  const response = await fetch(baseApi, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  return response.json();
}

export async function deleteCategoryApi(categoryId: string | undefined) {
  if (!categoryId) return;

  const response = await fetch(`${baseApi}?categoryId=${categoryId}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function loadCategoriesApi(): Promise<Repository.Category[]> {
  if(isTest){
    const resTest =  (await fetch("http://localhost:3000/testData/categories.json",{ cache: 'no-store', }));
    const temp = await resTest.json()
    return temp.results
  }


  let response = await fetch(baseApi, {
    cache: 'no-cache',
    method: "GET",
  });

  let json = await response.json();

  return json.data;
}
