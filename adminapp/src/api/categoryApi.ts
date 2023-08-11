import { Repository } from "vinstacore/src";
import {isTest} from "./config"


const baseUrl = "http://localhost:3000/api";

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
  if (!categoryId) return;

  const response = await fetch(`/api/category?categoryId=${categoryId}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function loadCategoriesApi(): Promise<Repository.Category[]> {
  if(isTest){
    const resTest =  (await fetch("http://localhost:3000/testData/categories.json",{ cache: 'no-store' }));
    const temp = await resTest.json()
    return temp.results
  }


  let response = await fetch(`${baseUrl}/category`, {
    method: "GET",
  });

  let json = await response.json();

  return json.data;
}
