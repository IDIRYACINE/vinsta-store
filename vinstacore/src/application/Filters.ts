import { Repository } from "..";


export interface IProductFilter {
    compare : (product:Repository.Product) => boolean;
    id : string;
}


export const ProductPriceFilter = (min:number, max:number) : IProductFilter => {
    return {
        id: FilterType.Price,
        compare : (product:Repository.Product) => {
            return product.price >= min && product.price <= max;
        }
    }
}

export const ProductSizeFilter = (size:string) : IProductFilter => {
    return {
        id :FilterType.Size,
        compare : (product:Repository.Product) => {
            return false;
        }
    }
}

export const ProductColorFilter = (color:string) : IProductFilter => {
    return {
        id : FilterType.Color,
        compare : (product:Repository.Product) => {
            return false;
        }
    }
}

export enum FilterType {
    Price = "price",
    Size = "size",
    Color = "color"
}