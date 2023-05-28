import { ProductRoutes  } from "@admin/components/navigation/Routes";
import router from "next/dist/client/router";



function navigateToProductCreator() {
  router.push(ProductRoutes.create);
}

export { navigateToProductCreator };