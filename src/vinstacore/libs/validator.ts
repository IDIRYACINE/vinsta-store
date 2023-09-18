

const isNumber = (value: string) => {
    const regex = /^\d+$/
    return regex.test(value)
}

export const isValidId = (id: string) => {

    const regex = /^[a-zA-Z]\w*$/

    return !regex.test(id) && id.length > 0

}

export const isValidCategory = (category:{name: string; imageUrl: string; code: string; description: string;}) :boolean => {
    const validName = category.name.length > 0
    const validImage = category.imageUrl.length > 0
    const validId = isValidId(category.code)
    return validName && validImage && validId
}


interface Product{
    name: string;
    productId: string;
    description: string;
    price: string;
    imageUrls: string[];
    categoryId: string | null;
    colorId: string;
    sizeId: string;
}
export const isValidProduct = (product:Product) :boolean => {
    const validName = product.name.length > 0
    const validImage = product.imageUrls.length > 0
    const validId = isValidId(product.productId)
    const validCategoryId = isValidId(product.categoryId ?? "")
    const validPrice = product.price.length > 0
    const validColorId = isNumber(product.colorId) 
    const validSizeId = isNumber(product.colorId)


    return validName && validImage && validId && validPrice && validCategoryId  
        && validColorId && validSizeId
}


export const isValidPhoneNumber = (phoneNumber: string) => {
    
        const regex = /^0[567]\d{8}$/
    
        return regex.test(phoneNumber)
    
}