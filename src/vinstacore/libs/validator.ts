import { Repository } from ".."


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