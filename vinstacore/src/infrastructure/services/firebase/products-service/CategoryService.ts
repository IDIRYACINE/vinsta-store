import { IRepository } from "@vinstacore/index";
import { CategoryServicePort, CreateCategoryProps, CreateCategoryResponse, DeleteCategoryProps, DeleteCategoryResponse, FindCategoryProps, FindCategoryResponse, LoadCategoryProps, LoadCategoryResponse, UpdateCategoryProps, UpdateCategoryResponse } from "@vinstacore/infrastructure/ports/services/CategoryServicePort";


export class FirebaseCategoryService implements CategoryServicePort {


    constructor(private readonly categoryRepo: IRepository) {

    }

    async create(createProps: CreateCategoryProps): Promise<CreateCategoryResponse> {
        return this.categoryRepo.create(
            createProps
        )
    }
    async update(updateProps: UpdateCategoryProps): Promise<UpdateCategoryResponse> {
        return this.categoryRepo.update(
            updateProps
        )
    }
    async delete(deleteProps: DeleteCategoryProps): Promise<DeleteCategoryResponse> {
        return this.categoryRepo.delete(
            deleteProps
        )
    }
    async load(loadProps: LoadCategoryProps): Promise<LoadCategoryResponse> {
        const data = await this.categoryRepo.load(
            loadProps
        )

        return data
    }
    async find(findProps: FindCategoryProps): Promise<FindCategoryResponse> {
        return this.categoryRepo.find(
            findProps
        )
    }

}