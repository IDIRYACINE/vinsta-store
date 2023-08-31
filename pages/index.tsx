
import { Box, CircularProgress } from "@mui/material";
import AppFooter from "@storefront/components/Footer";
import { CategoryGrid } from "@storefront/modules/categories/ui/CategoryGrid";
import { HeroSection } from '@storefront/modules/homepage/components/HeroSection';
import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory";




export default function Home() {

    
    const {isLoading,data,error} =useLoadDispatchCategories();



    return (
        <Box className="h-screen w-full">
            <HeroSection />
            {
                isLoading?  <div className="flex flex-row justify-center items-center"><CircularProgress/></div> : <CategoryGrid />
            }
            <AppFooter/>
        </Box>
    )

}
