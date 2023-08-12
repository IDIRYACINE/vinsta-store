import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Repository} from "@vinstastore/vinstacore";


const baseUrl = "http://localhost:3000/api/"

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getProductsByCategory: builder.query<Repository.Product, string>({
            query: (categoryId) => `products/${categoryId}`,
        }),
    }),
})

export const { useGetProductsByCategoryQuery } = productsApi
