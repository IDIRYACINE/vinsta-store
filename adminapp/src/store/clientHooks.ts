

import { RootState, AppDispatch, } from "@adminapp/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector