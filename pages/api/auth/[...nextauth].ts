import NextAuth from "next-auth"

import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";
import * as firestoreFunction from "firebase/firestore";


export const authOptions =
{
    providers: [
        GoogleProvider({
            clientId: "424442380556-hs3ffeg545hpngcrd0aspvq90seukbs3.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    adapter: FirestoreAdapter(),
    callbacks: {
        async session({ session, user, token }) {
            session.role = "customer"
            
            return session
        },
    }
}


export default NextAuth(
    authOptions
)