import { LoginProps, UserServicePort } from "@vinstacore";
import router from "next/dist/client/router";
import AuthState from "../state/AuthState";

export class AuthController {
    
    constructor(
        private readonly state: AuthState,
        private readonly userService: UserServicePort) {
    }

    login(props: LoginProps) {
        this.userService.login(props).then((response) => {
            if(response.user !== undefined){
                this.state.setUser(response.user)
                this.navigateToDashboard()
            }
        })
    }

    navigateToDashboard(){
        router.push("/admin/orders")
    }
}
