import { MapperBase } from "@vinstacore/commons/mappers.base";
import { Repository, } from "@vinstacore/infrastructure/ports/IRepositories";
import { ColorEntity } from "./ColorEntity";
import { ProductEntity } from "./ProductEntity";
import { SizeEntity } from "./SizeEntity";
import { ProductId, ProductName, ProductPrice, ProductDescription, ProductQuantity, ProductImage } from "./ValueObjects";


export class ProductMapper implements MapperBase<ProductEntity, Repository.Product>{

    toDomain(raw: Repository.Product): ProductEntity {

        const images = raw.imageUrls.map(item => {
            return new ProductImage(item.url, item.id)
        })

        return new ProductEntity(
            {
                name: new ProductName(raw.id),
                description: new ProductDescription(raw.description ?? ""),
                id: new ProductId(raw.id),
                quantity: new ProductQuantity(raw.quantity),
                price: new ProductPrice(raw.price),
                imageUrls: images,
                size : SizeEntity.fromRaw(raw.size),
                color : ColorEntity.fromRaw(raw.color)
            }
        )
    }

    toPersistence(domain: ProductEntity): Repository.Product {
        const images = domain.imageUrls.map(image => {
            return {
                id: image.id,
                url: image.value
            }
        })

        return {
            id: domain.id.value,
            name: domain.name.value,
            description: domain.description.value,
            price: domain.price.value,
            quantity: domain.quantity.value,
            imageUrls: images,
            color : domain.color.toRaw(),
            size : domain.size.toRaw()
        }
    }

}