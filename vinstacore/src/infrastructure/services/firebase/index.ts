import { BuildUserService } from "./builders/UserServiceBuilder";


export module FirebaseAdapter {
    export const userService = () => BuildUserService()

}