import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

const selectAllProducts = (state:RootState) => state.products.products
const selectDisplayedCategory = (state:RootState) => state.products.displayedCategory
const selectAllCategories = (state:RootState) => state.products.categories

const categoryProductsSelector = createSelector([selectAllProducts,selectDisplayedCategory] , (allProducts,displayedCategoryId) =>{
    return allProducts.filter(products => products.categoryId === displayedCategoryId)
})

const activeCategorySelector = createSelector([selectAllCategories],(categories) =>{
    return categories
        .filter(category => category.productCount > 0)
})

const displayedProductsSelector  = createSelector([selectAllProducts,selectDisplayedCategory],(products,displayedCategory) => {
    const filteredProducts =  products
    .filter(categoryProducts => categoryProducts.categoryId === displayedCategory)

    const isEmpty = filteredProducts.length === 0

    return isEmpty? [] : filteredProducts[0].products
})

export {categoryProductsSelector ,activeCategorySelector,displayedProductsSelector}