export interface FindProps {

}

export interface FindResponse {

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
    delete(delte:DeleteProps) : Promise<DeleteResponse>

}