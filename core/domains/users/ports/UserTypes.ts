import { UserId, UserName, UserPhone } from "../domain/ValueObjects";

export interface UserProps{
    id: UserId;
    name: UserName;
    phone: UserPhone;
}

export enum UserRoles {user,admin}