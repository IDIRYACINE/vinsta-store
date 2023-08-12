
import { makeAutoObservable } from "mobx"
import { UserEntity } from "@vinstastore/vinstacore"

export default class AuthState {
    private user?: UserEntity

    consructor() {
        makeAutoObservable(this)
    }

    getUser(): UserEntity | undefined {
        return this.user
    }

    setUser(user?: UserEntity) {
        this.user = user
    }

    isLoggedIn(): boolean {
        return (!!this.user) && (this.user.isAdmin.value)
    }

}