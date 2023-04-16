import { UserEntity } from "@/domains/users/domain/UserEntity"
import { UserEmail, UserPassword, UserPhone } from "@/domains/users/domain/ValueObjects"
import { FindProps } from "../IRepositories"

export interface LoginProps{
    phone: UserPhone,
    password: UserPassword
}


export interface LoginResponse{
    user? : UserEntity
    error? : Error
}


export interface SignupProps{
    email : UserEmail,
    phone : UserPhone,
    password : UserPassword
}


export interface SignupResponse{
    
}

export class FindUserProps implements FindProps {
    
    constructor(
        public readonly password?: string,
        public readonly phone?: string,
    ){}
}

export interface UserServicePort{
    login(loginProps:LoginProps) : Promise<LoginResponse>
    loginAdmin(loginProps:LoginProps) : Promise<LoginResponse>
    signup(singupProps:SignupProps) : Promise<SignupResponse>
}