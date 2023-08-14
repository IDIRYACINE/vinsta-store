import { EntityBase } from "@vinstacore/commons/entity.base";
import { Repository } from "@vinstacore/infrastructure/ports";
import { sizesRaw } from "../data/SizesRaw";
import { SizeId, SizeName } from "./ValueObjects";


interface SizeEntityProps {
    id: SizeId,
    size: SizeName
}


export class SizeEntity implements EntityBase<SizeEntity> {


    public readonly id: SizeId
    public readonly size: SizeName

    constructor(props: SizeEntityProps) {
        this.id = props.id
        this.size = props.size
    }

    equals(other: SizeEntity): boolean {
        return this.id.value === other.id.value
    }

    equalsRaw(size: Repository.Size): boolean {
        return this.id.value === size.id
    } 
    toRaw(): Repository.Size {
        return {
            size: this.size.value,
            id: this.id.value
        }
    }


    equalsById(sizeId:string) :boolean {
        return this.id.value === parseInt(sizeId)
    }

    static fromRaw(raw: Repository.Size) {
        return new SizeEntity({
            id: SizeId.fromValue(raw.id),
            size: SizeName.fromValue(raw.size)
        })

    }



}

export const sizes = sizesRaw.map(SizeEntity.fromRaw)