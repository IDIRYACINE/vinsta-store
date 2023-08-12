import { MapperBase } from "@vinstacore/commons/mappers.base";
import { Repository } from "@vinstacore/infrastructure/ports/IRepositories";
import { UserEntity } from "./UserEntity";
import { IsAdmin, UserId, UserName, UserPhone } from "./ValueObjects";


export class UserMapper implements MapperBase<UserEntity, Repository.User>{

    toDomain(raw: Repository.User): UserEntity {
        return new UserEntity(
            new UserId(raw.id),
            new UserName(raw.name),
            new UserPhone(raw.phone),
            new IsAdmin(raw.isAdmin)
        );
    }

    toPersistence(domain: UserEntity): Repository.User {
        return {
            id: domain.id.value,
            name: domain.name.value,
            phone: domain.phone.value,
            isAdmin: domain.isAdmin.value
        }
    }

}