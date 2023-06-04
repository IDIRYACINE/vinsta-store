import LoginPage from "app/login/page";
import { getServerSession } from "next-auth";


export default async function AdminHome(){

    console.log("AdminHome")
    const session = await getServerSession()

    if(session == null || session.user == null){

    }
    
    return (<div>{session?.user?.email}</div>)
}