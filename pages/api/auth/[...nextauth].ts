import NextAuth from "next-auth"

import CredentialsProvider from 'next-auth/providers/credentials'
import { FirebaseAdapter, UserEmail, UserPassword } from "vinstacore/src"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Email and Password',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials) => {

                const service = FirebaseAdapter.userService()

                const response = await service.login({
                    email: new UserEmail(credentials!.email),
                    password: new UserPassword(credentials!.password)
                })

                if (response.user) {
                    const user = {
                        id: response.user.id.value
                    }

                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            }
        })
    ],

    callbacks: {
        async session({ session, token, user }): Promise<any> {
            session.accessToken = token.accessToken
            session.user.id = token.id

            return session
        }
    }
}

export default NextAuth(authOptions)