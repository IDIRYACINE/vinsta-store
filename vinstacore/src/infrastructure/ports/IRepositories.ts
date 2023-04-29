export module Repository{
    

export interface User {
    id: string
    name: string
    phone: string
    isAdmin: boolean
}

export interface Category{
    productCount: number
    id :string,
    name :string,
    description? : string,
    imageUrl : string,

}

export interface Product{
    id :string,
    name :string,
    price : number,
    quantity :number,
    description? : string,
    imageUrls : string[]
}

export interface OrderHeader {
    id: string,
    status: string,
    createdAt: string,
    total: number
}

export interface Address {
    city: string,
    subCity: string,
}

export interface OrderItem {
    productId: string,
    quantity: number,
    price: number
    images?: string[]
}

export interface Order {
    header: OrderHeader,
    shipping: Address,
    items: OrderItem[]
}


}


export interface FindProps {

}

export interface FindResponse {
    data?: Repository.User
    error?: Error
}


export interface CreateProps {

}


export interface CreateResponse {

}
export interface UpdateResponse {

}

export interface UpdateProps {

}


export interface DeleteProps {

}


export interface DeleteResponse {

}

export interface LoadProps {

}


export interface LoadResponse {

}

export interface IRepository {
    find(find: FindProps): Promise<FindResponse>
    load(load: LoadProps): Promise<LoadResponse>
    create(create: CreateProps): Promise<CreateResponse>
    update(update: UpdateProps): Promise<UpdateResponse>
    delete(delte: DeleteProps): Promise<DeleteResponse>

}