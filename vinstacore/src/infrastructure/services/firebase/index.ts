import { buildUserService } from "./builders/UserServiceBuilder";


export module FirebaseAdapter {
    export const userService = () => buildUserService()

}