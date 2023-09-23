
import { Box, CircularProgress } from "@mui/material";
import AppFooter from "@storefront/components/commons/Footer";
import { CategoryGrid } from "@storefront/components/categories/ui/CategoryGrid";
import { HeroSection } from '@storefront/components/homepage/components/HeroSection';
import { useLoadDispatchCategories } from "@vinstacore/sdk/useCategory";




export default function Home() {

    
    const {isLoading,data,error} =useLoadDispatchCategories();



    return (
        <Box className="h-full w-full">
            <HeroSection />
            {
                isLoading?  <div className="flex min-h-96 flex-row justify-center items-center"><CircularProgress/></div> : <CategoryGrid />
            }
            <AppFooter/>
        </Box>
    )

}
