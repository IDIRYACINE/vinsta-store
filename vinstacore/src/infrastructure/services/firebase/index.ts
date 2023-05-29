import { buildFirebaseApp } from "./builders/FirebaseBuilder";
import { buildUserService } from "./builders/UserServiceBuilder";



const firebaseApp = buildFirebaseApp()

export module FirebaseAdapter {
    export const userService = () => buildUserService(firebaseApp)

}