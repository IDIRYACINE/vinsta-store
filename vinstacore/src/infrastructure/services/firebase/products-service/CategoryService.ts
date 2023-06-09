import { UpdatedField } from "@vinstacore/commons/api.base";
import { ImageUrl } from "@vinstacore/commons/value-objects.base";
import { CategoryId, CategoryImage, CategoryMapper, CategoryName } from "@vinstacore/index";
import { CategoryServicePort, CreateCategoryRawProps, CreateCategoryResponse, DeleteCategoryRawProps, DeleteCategoryResponse, FindCategoryRawProps, FindCategoryResponse, LoadCategoryRawProps, LoadCategoryResponse, UpdateCategoryRawProps, UpdateCategoryResponse } from "@vinstacore/infrastructure/ports/services/CategoryServicePort";
import { CategoryRepostiroy } from "./CategoryRepository";


export class FirebaseCategoryService implements CategoryServicePort {


    constructor(private readonly categoryRepo: CategoryRepostiroy,
        private readonly categoryMapper: CategoryMapper
    ) {

    }

    async create(options: CreateCategoryRawProps): Promise<CreateCategoryResponse> {

        return this.categoryRepo.create(
            {
                name: new CategoryName(options.name),
                id: new CategoryId(options.id),
                image: new ImageUrl(options.image)
            }
        )
    }
    async update(options: UpdateCategoryRawProps): Promise<UpdateCategoryResponse> {

        const updatedFields = options.updatedFields.map((field: any) => {
            return new UpdatedField(field.fieldName, field.newValue)
        })

        return this.categoryRepo.update(
            {
                id: new CategoryId(options.id),
                updatedFields: updatedFields
            }
        )
    }
    async delete(options: DeleteCategoryRawProps): Promise<DeleteCategoryResponse> {
        return this.categoryRepo.delete(
            {
                id: new CategoryId(options.id)
            }
        )
    }
    async load(options: LoadCategoryRawProps): Promise<LoadCategoryResponse> {
        return await this.categoryRepo.load(
            {}
        )

    }
    async find(options: FindCategoryRawProps): Promise<FindCategoryResponse> {
        return this.categoryRepo.find(
            {
                id: new CategoryId(options.id)
            }
        )
    }

}