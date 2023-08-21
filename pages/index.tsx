import {  useAppDispatch } from '@vinstacore/store/clientHooks';
import { loadCategoriesApi } from '@vinstacore/api/categoryApi';
import { Box } from "@mui/material";
import { CategoryGrid } from "@storefront/modules/categories/ui/CategoryGrid";
import { HeroSection } from '@storefront/modules/homepage/components/HeroSection';
import { useEffect } from 'react';
import { setCategories } from '@vinstacore/store/customer/slices/productsSlice';



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
