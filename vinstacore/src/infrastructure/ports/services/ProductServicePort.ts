import { UpdatedField } from "@vinstacore/commons/api.base"
import { CategoryId } from "@vinstacore/domains/category"
import { ProductEntity, ProductId, ProductMapper } from "@vinstacore/domains/product"
import { Repository } from "../IRepositories"


export interface IProductRepository {
    find(options: FindProductProps): Promise<FindProductResponse>
    load(options: LoadProductProps): Promise<LoadProductResponse>
    create(options: CreateProductProps): Promise<CreateProductResponse>
    update(options: UpdateProductProps): Promise<UpdateProductResponse>
    delete(options: DeleteProductProps): Promise<DeleteProductResponse>
}


export interface ProductServicePort {
    create(options: CreateProductRawProps): Promise<CreateProductResponse>
    update(options: UpdateProductRawProps): Promise<UpdateProductResponse>
    delete(options: DeleteProductRawProps): Promise<DeleteProductResponse>
    load(options: LoadProductRawProps): Promise<LoadProductResponse>
    find(options: FindProductRawProps): Promise<FindProductResponse>
}


export interface CreateProductProps {
    categoryId: CategoryId,
    productId: ProductId,
    product: ProductEntity

}

export interface UpdateProductProps {
    productId: ProductId,
    categoryId: CategoryId,
    updatedFields: Partial<Repository.Product>
}

export interface DeleteProductProps {
    productId: ProductId,
    categoryId: CategoryId
}


export interface LoadProductProps {
    categoryId: CategoryId
}

export interface FindProductProps {
    categoryId: CategoryId,
    productId: ProductId,
}

export interface CreateProductRawProps {
    categoryId: string,
    productId: string,
    product: Repository.Product

}

export interface UpdateProductRawProps {
    productId: string,
    categoryId: string,
    updatedFields: any
}

export interface DeleteProductRawProps {
    productId: string,
    categoryId: string
}
export interface LoadProductRawProps {
    categoryId: string 
}

export interface FindProductRawProps {
    categoryId: string,
    productId: string,
}

export interface CreateProductResponse { }
export interface UpdateProductResponse { }
export interface DeleteProductResponse { }

export interface LoadProductResponse { }


export interface FindProductResponse {
    product?: ProductEntity
}
export interface FindProductResponse {
    product?: ProductEntity
}
