import { Box } from "@mui/material";
import { CategoryGrid } from "@storefront/modules/categories/ui/CategoryGrid";
import { store } from "@storefront/store";
import { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";



export function HomePage() {

    
    
    useEffect(() => {
        store
    }, [])


    return (
        <Box>
            <HeroSection />
            <CategoryGrid />
        </Box>
    )
}