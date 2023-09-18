import { setProducts, } from "@vinstacore/store/customer/slices/productsSlice";
import { setProducts as setProductsAdmin } from "@vinstacore/store/admin/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks"
import { categoryProductsSelector } from "@vinstacore/store/selectors"
import { loadProductsApi } from ".."
import useSWR from "swr";


export const useLoadDispatchProducts = () => {

    const dispatch = useAppDispatch()

    const displayedCategoryId = useAppSelector(state => state.customerProducts.displayedCategory)!

    const products = useAppSelector(state => categoryProductsSelector(state))


    const { data, error, isLoading } = useSWR({categoryId:displayedCategoryId}, loadProductsApi,{
        revalidateOnMount: true,
    })


    if ((products.length === 0)) {
        if (data && data.length !== 0) {
            dispatch(
                setProducts(
                    {
                        categoryId: displayedCategoryId,
                        products: data
                    }
                ))
        }
    }

    return { isLoading, data, error }

}


export const useLoadDispatchProductsAdmin = () => {

    const dispatch = useAppDispatch()

    const products = useAppSelector(state => state.adminProducts.products)

    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)!

    const { data, error, isLoading } = useSWR({ categoryId }, loadProductsApi,{
        revalidateOnMount: true,
    })


    if ((products.length === 0)) {
        if (data && data.length !== 0) {
            dispatch(
                setProductsAdmin(
                    data
                ))
        }
    }

    return { isLoading, data:data??[], error }


}
