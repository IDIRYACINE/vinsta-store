

import { FirebaseApp } from "@firebase/app";
import { Auth, getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { UserMapper } from "@vinstacore/domains/users";
import { UserServicePort } from "@vinstacore/index";
import { FirebaseUserRepository } from "../user-service/UserRepository";
import { FirebaseUserService } from "../user-service/UserService";

let userService: FirebaseUserService;

export function buildUserService(firebaseApp : FirebaseApp) : UserServicePort {
    if (userService !== undefined) {
        return userService;
    }

    const auth = getAuth(firebaseApp)
    const firestore = getFirestore(firebaseApp)

    const userRepo = new FirebaseUserRepository(auth,firestore);
    const userMapper = new UserMapper();

    userService = new FirebaseUserService(
        userRepo,
        userMapper
        
    );

    return userService;
}


 