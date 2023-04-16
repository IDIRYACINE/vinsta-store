import { EntityBase } from "@/commons/entity.base";
import { IsAdmin, UserId, UserName, UserPhone } from "./ValueObjects";

export class UserEntity implements EntityBase<UserEntity>{
    constructor(public readonly id: UserId,
        public readonly name: UserName,
        public readonly phone: UserPhone,
        public readonly isAdmin: IsAdmin,
    ) {

    }
    equals(other: UserEntity): boolean {
        return this.id.value === other.id.value;
    }

}