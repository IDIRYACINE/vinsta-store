import { Box } from "@mui/material";
import { CategoryGrid } from "@storefront/modules/categories/ui/CategoryGrid";
import { useEffect } from "react";
import { HeroSection } from "../components/HeroSection";



export function HomePage() {

    


    return (
        <Box>
            <HeroSection />
            <CategoryGrid />
        </Box>
    )
}