

import { UserMapper } from "@vinstacore/domains/users";
import { UserServicePort } from "@vinstacore/index";
import { FirebaseUserRepository } from "../user-service/UserRepository";
import { FirebaseUserService } from "../user-service/UserService";

let userService: FirebaseUserService;

export function buildUserService() : UserServicePort {
    if (userService !== undefined) {
        return userService;
    }

    const userRepo = new FirebaseUserRepository();
    const userMapper = new UserMapper();

    userService = new FirebaseUserService(
        userRepo,
        userMapper
    );

    return userService;
}


 