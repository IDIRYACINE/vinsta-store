
"use client";

import { HomePage } from "@storefront";
import { loadCategoriesApi } from "adminapp/src";
import { mockCategoryRows } from "adminapp/src/modules/categories/table";
import Preloader from "storefront/src/store/Preloader";

export default async function Home() {

    const categories = await mockCategoryRows()
     
    return (
        <>
        <Preloader categories={categories} />
        <HomePage />
        </>

    )

}