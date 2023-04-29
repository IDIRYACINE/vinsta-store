import { CategoryRoutes } from "@admin/components/navigation/Routes";
import router from "next/dist/client/router";



function navigateToCategoryCreator() {
  router.push(CategoryRoutes.create);
}

export { navigateToCategoryCreator };