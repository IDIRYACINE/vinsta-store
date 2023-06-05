import { getServerSession } from "next-auth";


export default async function AdminHome(){

    const session = await getServerSession()

    if(session == null || session.user == null){

    }
    
    return (<div>{session?.user?.email}</div>)
}