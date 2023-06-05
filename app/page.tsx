
"use client";

import { Box } from "@mui/material";
import { useSession, signIn,signOut } from "next-auth/react"
export default function Home() {
    const {data:session} = useSession()



    if (session) {
        return <Box> <p>session {session.user?.email}</p>
                <button onClick={() => signOut()}> our </button>

        </Box>
    }


    return (
        <button onClick={() => signIn()}> login </button>
    )

}