import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import { ClientRoutes, navigateReplace } from "@vinstacore";

export function goBack(router:AppRouterInstance){
    navigateReplace(router,ClientRoutes.products)
}