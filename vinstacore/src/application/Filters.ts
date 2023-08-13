import { ColorEntity, Repository, SizeEntity } from "..";


export interface IProductFilter {
    compare: (product: Repository.Product) => boolean;
    remove: boolean,
    id: string;
}


export const ProductPriceFilter = (min: number, max: number): IProductFilter => {
    return {
        id: FilterType.Price,
        remove: false,
        compare: (product: Repository.Product) => {
            return product.price >= min && product.price <= max;
        }
    }
}

export const ProductSizeFilter = (sizes: SizeEntity[]): IProductFilter => {
    return {
        id: FilterType.Size,
        remove: sizes.length === 0,
        compare: (product: Repository.Product) => {
            let match = false

            sizes.forEach((size) => {
                match = match || (size.equalsRaw(product.size))
            })

            return match;
        }
    }
}

export const ProductColorFilter = (colors: ColorEntity[]): IProductFilter => {
    return {
        id: FilterType.Color,
        remove: colors.length === 0,

        compare: (product: Repository.Product) => {
            let match = false

            colors.forEach((color) => {
                match = match || (color.equalsRaw(product.color))
            })

            return match;
        }
    }
}

export enum FilterType {
    Price = "price",
    Size = "size",
    Color = "color"
}