import { EntityBase } from "@vinstacore/commons/entity.base";
import { SizeId, SizeName } from "./ValueObjects";


interface SizeEntityProps{
    id : SizeId,
    size:SizeName
}


export class SizeEntity implements EntityBase<SizeEntity> {
    public readonly id:SizeId
    public readonly size:SizeName
    
    constructor (props:SizeEntityProps){
        this.id = props.id
        this.size = props.size
    }

    equals(other: SizeEntity): boolean {
        return this.id.value === other.id.value
    }

}