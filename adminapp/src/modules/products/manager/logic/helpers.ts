import { ProductRoutes  } from "@adminapp/components/navigation/Routes";
import router from "next/dist/client/router";



function navigateToProductCreator() {
  router.push(ProductRoutes.create);
}

export { navigateToProductCreator };