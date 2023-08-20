
"use client";


import { loadCategoriesApi } from '@vinstastore/vinstaadmin';
import { setCategories, useAppDispatch, Preloader, HomePage } from "@vinstastore/storefront";

export default function Home() {
    const dispatch = useAppDispatch()

    loadCategoriesApi().then((categories) => {
        dispatch(setCategories(categories))
    })

    return (
        <>
            <Preloader />
            <HomePage />
        </>

    )

}