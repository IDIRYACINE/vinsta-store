import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Repository } from "@vinstacore";


const baseUrl = "http://localhost:3000/api/"
const categoriesApiEndPoint = "categories"


export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getAllCategories: builder.query<Repository.Category, string>({
            query: () => categoriesApiEndPoint,
        }),
        
    }),
})



export const { useGetAllCategoriesQuery } = categoriesApi