import { MapperBase } from "@vinstacore/commons/mappers.base";
import { Contact, City, CitySub } from "@vinstacore/domains/address";
import { Repository, } from "@vinstacore/infrastructure/ports/IRepositories";
import { CategoryEntity } from "./CategoryEntity";
import { CategoryDescription, CategoryId, CategoryImage, CategoryName, CategoryProductCount } from "./ValueObjects";


export class CategoryMapper implements MapperBase<CategoryEntity, Repository.Category>{

    toDomain(raw: Repository.Category): CategoryEntity {
      
        return new CategoryEntity(
           {
            id : new CategoryId(raw.id),
            name : new CategoryName(raw.name),
            description : new CategoryDescription(raw.description ?? ""),
            imageUrl : new CategoryImage(raw.imageUrl),
            productCount : new CategoryProductCount(raw.productCount),
           }
        );
    }

    toPersistence(domain: CategoryEntity): Repository.Category {
       
        return {
            id : domain.id.value,
            name : domain.name.value,
            description : domain.description.value,
            imageUrl : domain.imageUrl.value,
            productCount : domain.productCount.value,
        }
    }

}