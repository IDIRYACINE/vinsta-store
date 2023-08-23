import { useAppSelector } from "@vinstacore/store/clientHooks";
import CategoryGrid from "@adminapp/modules/products/manager/components/CategoryGrid";
import { ProductPage } from "@adminapp/modules/products/manager/ui/ProductPage";
import { useLoadDispatchCategories } from "@vinstacore/hooks/useCategory";




export default function Page() {

    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)

    useLoadDispatchCategories(true)


    if (categoryId) {
        return (
            <ProductPage />
        )
    }

    return (
        <CategoryGrid />

    )
}

