import { UpdatedField } from "@vinstacore/commons/api.base";
import { CategoryId, IRepository, ProductId, ProductMapper } from "@vinstacore/index";
import { CreateProductRawProps, CreateProductResponse, DeleteProductRawProps, DeleteProductResponse, FindProductRawProps, FindProductResponse, LoadProductRawProps, LoadProductResponse, ProductServicePort, UpdateProductRawProps, UpdateProductResponse } from "@vinstacore/infrastructure/ports/services/ProductServicePort";
import { ProductRepostiroy } from "./ProductRepository";


export class FirebaseProductService implements ProductServicePort {


    constructor(private readonly productsRepo: ProductRepostiroy, private readonly productMapper: ProductMapper) {

    }
    find(options: FindProductRawProps): Promise<FindProductResponse> {

        return this.productsRepo.find(
            {
                categoryId: new CategoryId(options.categoryId),
                productId: new ProductId(options.productId)
            }
        )
    }

    async create(options: CreateProductRawProps): Promise<CreateProductResponse> {


        return this.productsRepo.create(
            {
                categoryId: new CategoryId(options.categoryId),
                productId: new ProductId(options.productId),
                product: this.productMapper.toDomain(options.product)
            }
        )

    }
    update(options: UpdateProductRawProps): Promise<UpdateProductResponse> {

        const updatedFields = options.updatedFields.map((field: any) => {
            return new UpdatedField(field.fieldName, field.newValue)
        })

        return this.productsRepo.update(
            {
                categoryId: new CategoryId(options.categoryId),
                productId: new ProductId(options.productId),
                updatedFields: updatedFields
            }
        )
    }
    delete(options: DeleteProductRawProps): Promise<DeleteProductResponse> {
        return this.productsRepo.delete(
            {
                categoryId: new CategoryId(options.categoryId),
                productId: new ProductId(options.productId),
            }
        )
    }
    load(options: LoadProductRawProps): Promise<LoadProductResponse> {
        return this.productsRepo.load(
            {
                categoryId: new CategoryId(options.categoryId),
            }
        )
    }

}