import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { ProductTreasure } from "./productsSlice"

const selectAllProducts = (state: RootState) => state.products.products
const selectDisplayedCategory = (state: RootState) => state.products.displayedCategory
const selectAllCategories = (state: RootState) => state.products.categories
const selectCartItems = (state: RootState) => state.orders.cart

const categoryProductsSelector = createSelector([selectAllProducts, selectDisplayedCategory], (allProducts, displayedCategoryId) => {
    const products: ProductTreasure[] = allProducts.filter(products => products.categoryId === displayedCategoryId)
    const notEmpty: boolean = products.length !== 0
    return notEmpty ? products[0].products : []
})

const activeCategorySelector = createSelector([selectAllCategories], (categories) => {
    return categories
        .filter(category => category.productCount > 0)
})

const displayedProductsSelector = createSelector([selectAllProducts, selectDisplayedCategory], (products, displayedCategory) => {
    const filteredProducts = products
        .filter(categoryProducts => categoryProducts.categoryId === displayedCategory)

    const isEmpty = filteredProducts.length === 0

    return isEmpty ? [] : filteredProducts[0].products
})

const cartItemsCountSelector = createSelector([selectCartItems], (cartItems) => {
    return cartItems.length
})

export { categoryProductsSelector,cartItemsCountSelector, activeCategorySelector, displayedProductsSelector }