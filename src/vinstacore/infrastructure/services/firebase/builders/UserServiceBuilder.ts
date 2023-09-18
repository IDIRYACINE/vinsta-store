

import { Auth, getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { UserMapper } from "@vinstacore/domains/users";
import { UserServicePort } from "@vinstacore/infrastructure/ports";
import { FirebaseUserRepository } from "../user-service/UserRepository";
import { FirebaseUserService } from "../user-service/UserService";
import { buildFirebaseApp } from "./FirebaseBuilder";

let userService: FirebaseUserService;

export function buildUserService() : UserServicePort {
    if (userService !== undefined) {
        return userService;
    }
    const firebaseApp = buildFirebaseApp()

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


 