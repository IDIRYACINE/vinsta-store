import { UpdatedField } from "@vinstacore/commons/api.base"
import { CategoryId } from "@vinstacore/domains/category"
import { ProductEntity, ProductId, ProductMapper } from "@vinstacore/domains/product"
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
    updatedFields : Partial<Repository.Product>
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


 export function CreateProductOptionsFromJson(json: any): CreateProductProps {
    const product = new ProductMapper().toDomain(json.product)


    return {
        cateogryId : new CategoryId(json.categoryId),
        productId : new ProductId(json.productId),
        product :product
    }

}

export function UpdateProductOptionsFromJson(json: any): UpdateProductProps {

    const updatedFields = json.updatedFields.map((field: any) => {
        return new UpdatedField(field.fieldName, field.newValue)
    })

    return {
        productId : new ProductId(json.productId),
        categoryId: new CategoryId(json.categoryId),
        updatedFields: updatedFields
    }
}