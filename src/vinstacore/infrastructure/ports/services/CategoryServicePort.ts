import { LimitProp, PageProp } from "@vinstacore/commons/api.base"
import { ImageUrl } from "@vinstacore/commons/value-objects.base"
import { CategoryId, CategoryName } from "@vinstacore/domains/category/domain/ValueObjects"
import { Repository } from "../IRepositories"


export interface CategoryServicePort {
    create(options: CreateCategoryRawProps): Promise<CreateCategoryResponse>
    update(options: UpdateCategoryRawProps): Promise<UpdateCategoryResponse>
    delete(options: DeleteCategoryRawProps): Promise<DeleteCategoryResponse>
    load(options: LoadCategoryRawProps): Promise<LoadCategoryResponse>
    find(options: FindCategoryRawProps): Promise<FindCategoryResponse>
    increment(options: IncrementCategoryRawProps): Promise<IncrementCategoryResponse>

}

export interface IncrementCategoryRawProps {
    id: string,
    quantity: number 
}

export interface ICategoryRepostiroy {
    create(createProps: CreateCategoryProps): Promise<CreateCategoryResponse>
    update(updateProps: UpdateCategoryProps): Promise<UpdateCategoryResponse>
    delete(deleteProps: DeleteCategoryProps): Promise<DeleteCategoryResponse>
    load(loadProps: LoadCategoryProps): Promise<LoadCategoryResponse>
    find(findProps: FindCategoryProps): Promise<Repository.Category>
    increment(incrementProps: IncrementCategoryProps): Promise<IncrementCategoryResponse>
}

export interface IncrementCategoryProps {
    id: string,
    quantity: number
}

export interface CreateCategoryProps {
    name: CategoryName,
    id: CategoryId,
    image: ImageUrl,
    description?: string
}

export interface UpdateCategoryProps {
    id: CategoryId,
    updatedFields: Partial<Repository.Category>
}
export interface DeleteCategoryProps {
    id: CategoryId
}
export interface LoadCategoryProps {
    page: PageProp,
    limit: LimitProp
}

export interface FindCategoryProps {
    id: CategoryId
}


export interface CreateCategoryRawProps {
    name: string,
    id: string,
    imageUrl: string,
    description?: string
}

export interface UpdateCategoryRawProps {
    id: string,
    updatedFields: any
}
export interface DeleteCategoryRawProps {
    id: string
}
export interface LoadCategoryRawProps {
    page: number,
    limit: number
}

export interface FindCategoryRawProps {
    id: string
}


export interface CreateCategoryResponse {
    // status: OperationStatus
}

export interface UpdateCategoryResponse {
    // status: OperationStatus
}

export interface DeleteCategoryResponse {
    // status: OperationStatus
}

export interface LoadCategoryResponse {
    data: Repository.Category[],
    // status: OperationStatus
}

export interface FindCategoryResponse {
    // data: CategoryEntity,
    // status: OperationStatus

}

export interface IncrementCategoryResponse {

}

