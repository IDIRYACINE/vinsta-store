
import {  useAppDispatch } from '@vinstacore/store/clientHooks';
import { loadCategoriesApi,baseApi } from '@vinstacore/api/categoryApi';
import { setCategories } from '@vinstacore/store/customer/slices/productsSlice';
import { setCategories as setCategoriesAdmin } from "@vinstacore/store/admin/slices/categoriesSlice";
import useSWR from 'swr';


export const useLoadDispatchCategories = (isAdmin=false) => {
    const { data, error, isLoading } = useSWR(baseApi, loadCategoriesApi,{
        revalidateOnMount: true,
    })
    
    const dispatch = useAppDispatch()

    if(data){
        dispatch(isAdmin? setCategoriesAdmin(data) : setCategories(data))
    }

    return {isLoading,data,error}
}
