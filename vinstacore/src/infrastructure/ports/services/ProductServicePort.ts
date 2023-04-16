

export interface ProductServicePort {
    create(createProps: CreateProductProps): Promise<CreateProductResponse>
    update(updateProps: UpdateProductProps): Promise<UpdateProductResponse>
    delete(deleteProps: DeleteProductProps): Promise<DeleteProductResponse>
    load(loadProps: LoadProductProps): Promise<LoadProductResponse>
}

export interface CreateProductProps { }
export interface UpdateProductProps { }
export interface DeleteProductProps { }
export interface CreateProductResponse { }
export interface UpdateProductResponse { }
export interface DeleteProductResponse { }

export interface LoadProductResponse { }
export interface LoadProductProps { }
