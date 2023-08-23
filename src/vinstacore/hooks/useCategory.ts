import { useEffect } from 'react';

import {  useAppDispatch } from '@vinstacore/store/clientHooks';
import { loadCategoriesApi } from '@vinstacore/api/categoryApi';
import { setCategories } from '@vinstacore/store/customer/slices/productsSlice';
import { setCategories as setCategoriesAdmin } from "@vinstacore/store/admin/slices/categoriesSlice";


export const useLoadDispatchCategories = (isAdmin=false) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        loadCategoriesApi().then((categories) => {
            dispatch(isAdmin? setCategoriesAdmin(categories) : setCategories(categories))
        })
    }, [dispatch,isAdmin])
}