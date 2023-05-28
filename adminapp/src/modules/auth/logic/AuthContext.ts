import { FirebaseAdapter } from "@vinstacore"
import AuthState from "../state/AuthState"
import { AuthController } from "./AuthController"

let _state = new AuthState()
let _authController = new AuthController(_state, FirebaseAdapter.userService())


export const AuthContext = {
    state: _state,
    controller: _authController
}