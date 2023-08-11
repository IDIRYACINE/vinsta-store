"use client";

import { useRef } from "react";
import { store } from "./store";
import { Repository ,Panel} from "@vinstacore";
import { setOrders, setSelectedOrderStatus } from "./slices/ordersSlice";
import { setProducts } from "./slices/productsSlice";
import { setCategories } from "./slices/categoriesSlice";
import { setPanels } from "./slices/navigationSlice";
import { orderStatusfromString } from "@adminapp/modules/orders/domain/OrderStatus";


interface PreloaderProps {
  categories?: Repository.Category[],
  products?: Repository.Product[],
  orders?: Repository.Order[],
  panels?: Panel[],
}

function Preloader({ categories, products, orders, panels }: PreloaderProps) {



  const loaded = useRef(false);

  if (!loaded.current) {

    if (categories !== undefined) store.dispatch(setCategories(categories));
    if (products !== undefined) store.dispatch(setProducts(products));
    if (orders !== undefined) {
      store.dispatch(setOrders(orders));
      store.dispatch(setSelectedOrderStatus(orderStatusfromString("confirmed")))

    }
    if (panels !== undefined) store.dispatch(setPanels(panels));

    loaded.current = true;
  }

  return null;
}

export default Preloader;