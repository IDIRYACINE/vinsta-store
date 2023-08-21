"use client";

import { Repository, Panel } from "@vinstacore/index";
import { setCategories, useAppDispatch } from ".";


interface PreloaderProps {
    categories?: Repository.Category[],
    products?: Repository.Product[],
    panels?: Panel[],
}

 function Preloader({ categories, products, panels }: PreloaderProps) {


    const dispatch = useAppDispatch();

    if (categories != undefined) {
        dispatch(setCategories(categories));
    }



    return null;
}

export {Preloader}

