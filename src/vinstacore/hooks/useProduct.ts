import { setProducts, } from "@vinstacore/store/customer/slices/productsSlice";
import { setProducts as setProductsAdmin } from "@vinstacore/store/admin/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@vinstacore/store/clientHooks"
import { categoryProductsSelector } from "@vinstacore/store/selectors"
import { useEffect, useRef } from "react"
import { loadProductsApi } from ".."


export const useLoadDispatchProducts = () => {

    const dispatch = useAppDispatch()

    const displayedCategoryId = useAppSelector(state => state.customerProducts.displayedCategory)!

    const products = useAppSelector(state => categoryProductsSelector(state))

    const mounted = useRef(false)

    useEffect(() => {
        if ((products.length === 0) && !mounted.current) {
            loadProductsApi({ categoryId: displayedCategoryId }).then((loadedProducts) => {
                if (loadedProducts.length === 0) return
                dispatch(

                    setProducts(
                        {
                            categoryId: displayedCategoryId,
                            products: loadedProducts
                        }
                    ))
            })
            mounted.current = true

        }
    }, [dispatch, displayedCategoryId, products.length])
}


export const useLoadDispatchProductsAdmin = () => {

    const dispatch = useAppDispatch()

    const products = useAppSelector(state => state.adminProducts.products)

    const categoryId = useAppSelector(state => state.adminProducts.displayedCategoryId)!

    const mounted = useRef(false)

    useEffect(() => {
        if ((products.length === 0) && !mounted.current) {
            loadProductsApi({ categoryId }).then((loadedProducts) => {
                if (loadedProducts.length === 0) return
                dispatch(
                    setProductsAdmin(
                        loadedProducts
                    ))
            })
            mounted.current = true

        }
    }, [dispatch, products.length, categoryId])
}
