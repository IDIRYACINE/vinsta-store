import NextAuth from "next-auth"

import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";
import * as firestoreFunction from "firebase/firestore";


export default NextAuth(
    {
        providers: [
            GoogleProvider({
                clientId: "424442380556-hs3ffeg545hpngcrd0aspvq90seukbs3.apps.googleusercontent.com",
                clientSecret: "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"
            })
        ],
        adapter: FirestoreAdapter()
    }
)