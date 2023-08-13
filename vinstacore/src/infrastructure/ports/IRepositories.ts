export module Repository {

    export interface Destination {
        name: string,
        id: string | number
    }

    export interface User {
        id: string
        name: string
        phone: string
        isAdmin: boolean
    }

    export interface Category {
        productCount: number
        id: string,
        name: string,
        description?: string,
        imageUrl: string,

    }

    export interface Size {
        size: string,
        id: number
    }

    export interface Color{
        color :string,
        id:number
    }

    export interface Image {
        id: number,
        url: string
    }

    export interface Product {
        id: string,
        name: string,
        price: number,
        quantity: number,
        description?: string,
        size : Size,
        color : Color,
        imageUrls: Image[]
    }

    export interface OrderHeader {
        id: string,
        status: string,
        createdAt: string,
        total: number
    }

    export interface Contacts {
        city: string,
        customer : string,
        phone:string,
    }

    export interface OrderItem {
        productId: string,
        color : Color,
        size:Size,
        quantity: number,
        categoryId: string,
        name: string,
        price: number
        images?: string[]
    }

    export interface Order {
        header: OrderHeader,
        shipping: Contacts,
        items: OrderItem[]
    }


}


export interface FindProps {

}

export interface FindResponse {
    data? : any,
    error? : {
        name: string,
        message: string
    }
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
    find(options: FindProps): Promise<FindResponse>
    load(options: LoadProps): Promise<LoadResponse>
    create(options: CreateProps): Promise<CreateResponse>
    update(options: UpdateProps): Promise<UpdateResponse>
    delete(options: DeleteProps): Promise<DeleteResponse>

}
