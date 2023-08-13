import { EntityBase } from "@vinstacore/commons/entity.base";
import { Repository } from "@vinstacore/infrastructure/ports";
import { colorsRaw } from "../data/ColorsRaw";
import { ColorId, ColorName } from "./ValueObjects";


interface ColorEntityProps{
    id : ColorId,
    color:ColorName
}


export class ColorEntity implements EntityBase<ColorEntity> {
    toRaw(): Repository.Color {
        throw new Error("Method not implemented.");
    }
    
    equalsRaw(color: Repository.Color): boolean {
        return this.id.value === color.id
    }

    public readonly id:ColorId
    public readonly color:ColorName
    
    constructor (props:ColorEntityProps){
        this.id = props.id
        this.color = props.color
    }

    equals(other: ColorEntity): boolean {
        return this.id.value === other.id.value
    }

    static fromRaw(raw:Repository.Color){
        return new ColorEntity({
            id:ColorId.fromValue(raw.id),
            color:ColorName.fromValue(raw.color)
        })

    }

}

export const colors = colorsRaw.map(ColorEntity.fromRaw)