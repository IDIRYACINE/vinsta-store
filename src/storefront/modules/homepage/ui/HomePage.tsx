"use client"

import { Box } from "@mui/material";
import { CategoryGrid } from "@storefront/modules/categories/ui/CategoryGrid";
import { HeroSection } from "../components/HeroSection";



export function HomePage() {

    


    return (
        <Box className="h-screen">
            <HeroSection />
            <CategoryGrid />
        </Box>
    )
}