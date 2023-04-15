import { EntityBase } from "@/commons/entity.base";
import { UserProps } from "../ports/UserTypes";

export class UserEntity implements EntityBase<UserEntity>{
    constructor(public readonly userProps: UserProps) {

    }
    equals(other: UserEntity): boolean {
        return this.userProps.id.value === other.userProps.id.value;
    }

}