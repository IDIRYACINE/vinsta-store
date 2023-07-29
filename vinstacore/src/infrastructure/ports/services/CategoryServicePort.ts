import { LimitProp, PageProp, UpdatedField } from "@vinstacore/commons/api.base"
import { OperationStatus } from "@vinstacore/commons/operation-status.base"
import { ImageUrl } from "@vinstacore/commons/value-objects.base"
import { CategoryEntity } from "@vinstacore/domains/category/domain/CategoryEntity"
import { CategoryId, CategoryName } from "@vinstacore/domains/category/domain/ValueObjects"
import { Repository } from "../IRepositories"


export interface CategoryServicePort {
    create(options: CreateCategoryRawProps): Promise<CreateCategoryResponse>
    update(options: UpdateCategoryRawProps): Promise<UpdateCategoryResponse>
    delete(options: DeleteCategoryRawProps): Promise<DeleteCategoryResponse>
    load(options: LoadCategoryRawProps): Promise<LoadCategoryResponse>
    find(options: FindCategoryRawProps): Promise<FindCategoryResponse>

}

export interface ICategoryRepostiroy {
    create(createProps: CreateCategoryProps): Promise<CreateCategoryResponse>
    update(updateProps: UpdateCategoryProps): Promise<UpdateCategoryResponse>
    delete(deleteProps: DeleteCategoryProps): Promise<DeleteCategoryResponse>
    load(loadProps: LoadCategoryProps): Promise<LoadCategoryResponse>
    find(findProps: FindCategoryProps): Promise<Repository.Category>
}

export interface CreateCategoryProps {
    name: CategoryName,
    id: CategoryId,
    image: ImageUrl
}

export interface UpdateCategoryProps {
    id: CategoryId,
    updatedFields: UpdatedField
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
    imageUrl: string
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

