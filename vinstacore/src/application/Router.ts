import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export function navigateReplace(router:AppRouterInstance,route:string){
    router.replace(route)
}