
import { Box } from "@mui/material";
import { CategoryGrid } from "@storefront/modules/categories/ui/CategoryGrid";
import { HeroSection } from '@storefront/modules/homepage/components/HeroSection';
import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory";




export default function Home() {

    
    useLoadDispatchCategories();



    return (
        <Box className="h-screen">
            <HeroSection />
            <CategoryGrid />
        </Box>
    )

}
