import { IRepository } from "@vinstacore/index";
import { CreateProductProps, CreateProductResponse, DeleteProductProps, DeleteProductResponse, FindProductProps, FindProductResponse, LoadProductProps, LoadProductResponse, ProductServicePort, UpdateProductProps, UpdateProductResponse } from "@vinstacore/infrastructure/ports/services/ProductServicePort";


export class FirebaseProductService implements ProductServicePort {


    constructor(private readonly productsRepo: IRepository) {

    }
    find(findProps: FindProductProps): Promise<FindProductResponse> {

        return this.productsRepo.find(
            findProps
        )
    }

    async create(createProps: CreateProductProps): Promise<CreateProductResponse> {

        return this.productsRepo.create(
            createProps
        )

    }
    update(updateProps: UpdateProductProps): Promise<UpdateProductResponse> {
        return this.productsRepo.update(
            updateProps
        )
    }
    delete(deleteProps: DeleteProductProps): Promise<DeleteProductResponse> {
        return this.productsRepo.delete(
            deleteProps
        )
    }
    load(loadProps: LoadProductProps): Promise<LoadProductResponse> {
        return this.productsRepo.load(
            loadProps
        )
    }

}