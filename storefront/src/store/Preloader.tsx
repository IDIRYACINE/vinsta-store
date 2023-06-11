"use client";

import { useRef } from "react";
import { Repository, Panel } from "@vinstacore";


interface PreloaderProps {
    categories?: Repository.Category[],
    products?: Repository.Product[],
    panels?: Panel[],
}

function Preloader({ categories, products, panels }: PreloaderProps) {



    const loaded = useRef(false);

    if (!loaded.current) {


        loaded.current = true;
    }

    return null;
}

export default Preloader;