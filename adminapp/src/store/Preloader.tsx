"use client";

import { useRef } from "react";
import { store } from "./store";
import { Repository } from "@vinstacore";
import { Panel } from "@adminapp/components/navigation";
import { setOrders } from "./slices/ordersSlice";
import { setProducts } from "./slices/productsSlice";
import { setCategories } from "./slices/categoriesSlice";
import { setPanels } from "./slices/navigationSlice";

function Preloader({ categories,products,orders,panels }: { categories: Repository.Category[],
    products:Repository.Product[],
    orders:Repository.Order[],
    panels:Panel[],
}) {
    
  const loaded = useRef(false);

  if (!loaded.current) {
    store.dispatch(setOrders(orders));
    store.dispatch(setProducts(products));
    store.dispatch(setCategories(categories));
    store.dispatch(setPanels(panels));

    loaded.current = true;
  }

  return null;
}

export default Preloader;