import { CategoryId } from "@vinstacore/domains/category"
import { ProductEntity, ProductId } from "@vinstacore/domains/product"
import { Repository } from "../IRepositories"


export interface IProductRepository{
    find(options: FindProductProps): Promise<FindProductResponse>
    load(options: LoadProductProps): Promise<LoadProductResponse>
    create(options: CreateProductProps): Promise<CreateProductResponse>
    update(options: UpdateProductProps): Promise<UpdateProductResponse>
    delete(options: DeleteProductProps): Promise<DeleteProductResponse>
}


export interface ProductServicePort {
    create(createProps: CreateProductProps): Promise<CreateProductResponse>
    update(updateProps: UpdateProductProps): Promise<UpdateProductResponse>
    delete(deleteProps: DeleteProductProps): Promise<DeleteProductResponse>
    load(loadProps: LoadProductProps): Promise<LoadProductResponse>
    find (findProps : FindProductProps) : Promise<FindProductResponse>
}

export interface FindProductResponse{
    product? : ProductEntity 
}

export interface CreateProductProps { 
    cateogryId : CategoryId,
    productId : ProductId,
    product : ProductEntity
    
}

export interface UpdateProductProps { 
    productId :ProductId,
    categoryId :CategoryId,
    updatedValues : Partial<Repository.Product>
}

export interface DeleteProductProps {
    productId :ProductId,
    categoryId :CategoryId
 }
export interface CreateProductResponse { }
export interface UpdateProductResponse { }
export interface DeleteProductResponse { }

export interface LoadProductResponse { }
export interface LoadProductProps {
    categoryId : CategoryId
 }

 export interface FindProductProps{
    categoryId :CategoryId,
    productId : ProductId,
 }