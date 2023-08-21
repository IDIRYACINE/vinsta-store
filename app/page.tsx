export const dynamic = 'force-dynamic'

"use client";



import { HomePage } from '@storefront/index';
import { Preloader, setCategories, useAppDispatch } from '@storefront/store';
import { loadCategoriesApi } from '@vinstacore/index';

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