import NextAuth, { NextAuthOptions } from "next-auth"

import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";
import * as firestoreFunction from "firebase/firestore";
import { FirebaseAdapter } from "@vinstastore/vinstacore";


export const authOptions : NextAuthOptions =
{
    adapter: FirestoreAdapter(),
    secret: process.env.NEXTJS_SECRET,
    session: {
        strategy: "jwt",
      },

      
    // pages:{
    //     signIn: "/login",
    // },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            httpOptions: {
                timeout: 40000,
            },
        }),

    ],
    callbacks: {
        
        async signIn({ user, account, profile }) {
            FirebaseAdapter.userService()
            return true
        },


        async session({ session, user, token }) {
            session.user = user

            return session
        },

        async jwt({ user, token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },

    }
}


export default NextAuth(
    authOptions
)