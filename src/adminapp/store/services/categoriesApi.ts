import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/'
import { Repository } from "@vinstacore/index";


const baseUrl = "http://localhost:3000/api/"
const categoriesApiEndPoint = "categories"


export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getAllCategories: builder.query<Repository.Category, string>({
            query: () => categoriesApiEndPoint,
        }),
        createCategory: builder.mutation<Repository.Category, Repository.Category>({
            query: ({ id, ...category }) => ({
                url: categoriesApiEndPoint,
                method: 'POST',
                body: category,
            }),

            transformResponse: (response: { data: Repository.Category }, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,

        }),
    }),
})

