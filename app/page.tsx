export const dynamic = 'force-dynamic'

"use client";



import { setCategories, useAppDispatch } from '@storefront/store';
import { loadCategoriesApi } from '@vinstacore/index';
import { useEffect } from 'react';
import { Box } from "@mui/material";
import { CategoryGrid } from "@storefront/modules/categories/ui/CategoryGrid";
import { HeroSection } from '@storefront/modules/homepage/components/HeroSection';

export default function Home() {

    const dispatch = useAppDispatch()

    useEffect(() => {

        loadCategoriesApi().then((categories) => {
            dispatch(setCategories(categories))
        })
    }, [dispatch])

    return (
        <Box className="h-screen">
            <HeroSection />
            <CategoryGrid />
        </Box>
    )

}
