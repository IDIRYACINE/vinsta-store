import NextAuth, { DefaultUser } from "next-auth"


declare module "next-auth" {

    interface User extends DefaultUser {
        isAdmin: boolean,
    } 

}