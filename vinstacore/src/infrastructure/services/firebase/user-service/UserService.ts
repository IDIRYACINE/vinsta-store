import { UserMapper } from "@vinstacore/domains/users";
import { IRepository } from "@vinstacore/infrastructure/ports/IRepositories";
import { FindUserProps, LoginProps, LoginResponse, SignupProps, SignupResponse, UserServicePort } from "@vinstacore/infrastructure/ports/services/UserServicePort";

export class FirebaseUserService implements UserServicePort {

    constructor(private readonly userRepo: IRepository, private readonly userMapper: UserMapper) {

    }

    async login(loginProps: LoginProps): Promise<LoginResponse> {
        const findProps = new FindUserProps(loginProps.password.value, loginProps.email!.value)
        return this.userRepo.find(findProps).then((response) => {

            if (response.data === null) {
                throw new Error("User not found")
            }

            const user = this.userMapper.toDomain(response.data!)

            return {
                user: user
            }
        })
    }

    async loginAdmin(loginProps: LoginProps): Promise<LoginResponse> {
        const findProps = new FindUserProps(loginProps.password.value, loginProps.email!.value)
        return this.userRepo.find(findProps).then((response) => {

            if (response.data === null) {
                throw new Error("User not found")
            }

            const user = this.userMapper.toDomain(response.data!)

            return {
                user: user
            }
        })
    }

    signup(singupProps: SignupProps): Promise<SignupResponse> {
        throw new Error("Method not implemented.");
    }

}