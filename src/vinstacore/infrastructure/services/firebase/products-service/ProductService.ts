import { CategoryId } from "@vinstacore/domains/category";
import { ProductId, ProductMapper } from "@vinstacore/domains/product";
import { CategoryServicePort } from "@vinstacore/infrastructure/ports/services/CategoryServicePort";
import { CreateProductRawProps, CreateProductResponse, DeleteProductRawProps, DeleteProductResponse, FindProductRawProps, FindProductResponse, LoadProductRawProps, LoadProductResponse, ProductServicePort, UpdateProductRawProps, UpdateProductResponse } from "@vinstacore/infrastructure/ports/services/ProductServicePort";
import { ProductRepostiroy } from "./ProductRepository";


export class FirebaseProductService implements ProductServicePort {


    constructor(private readonly productsRepo: ProductRepostiroy, 
        private readonly productMapper: ProductMapper,
        private readonly categoryService: CategoryServicePort,
        ) {

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

        this.updateProductListings({
            categoryId: options.categoryId,
            quantity: 1
        });

        return this.productsRepo.create(
            {
                categoryId: new CategoryId(options.categoryId),
                productId: new ProductId(options.productId),
                product: this.productMapper.toDomain(options.product)
            }
        )

    }
    update(options: UpdateProductRawProps): Promise<UpdateProductResponse> {


        return this.productsRepo.update(
            {
                categoryId: new CategoryId(options.categoryId),
                productId: new ProductId(options.productId),
                product: options.product
            }
        )
    }
    delete(options: DeleteProductRawProps): Promise<DeleteProductResponse> {
        this.updateProductListings({
            categoryId: options.categoryId,
            quantity: -1
        });

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


    private async updateProductListings(options: UpdateCategoryListingProps) {

        const { categoryId, quantity } = options;

        this.categoryService.increment({
            id: categoryId,
            quantity,
        });

    }

}

interface UpdateCategoryListingProps {
    categoryId: string;
    quantity: number
}