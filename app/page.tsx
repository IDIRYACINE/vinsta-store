
"use client";

export const dynamic = 'force-dynamic'

import { HomePage } from "@storefront";
import { loadCategoriesApi } from "adminapp/src";
import { mockCategoryRows } from "adminapp/src/modules/categories/table";
import { setCategories, useAppDispatch } from "storefront/src/store";
import Preloader from "storefront/src/store/Preloader";

export default function Home() {
    const dispatch = useAppDispatch()

    loadCategoriesApi().then((categories) => {
        dispatch(setCategories(categories))
    })
     
    return (
        <>
        <Preloader  />
        <HomePage />
        </>

    )

}