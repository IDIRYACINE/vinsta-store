import { UserEntity } from "@/domains/users/domain/UserEntity"
import { UserEmail, UserPassword, UserPhone } from "@/domains/users/domain/ValueObjects"

export interface LoginProps{
    phone: UserPhone
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

export interface UserServicePort{
    login(loginProps:LoginProps) : Promise<LoginResponse>
    loginAdmin(loginProps:LoginProps) : Promise<LoginResponse>
    signup(singupProps:SignupProps) : Promise<SignupResponse>
}