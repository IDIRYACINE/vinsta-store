import { Panel, PanelId } from "@vinstacore";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface NavigationState {
    panels: Panel[];
    selectedId: PanelId;
    selectedPanel: Panel;
    isModalOpen : boolean;

}


export const panels: Panel[] = [
    { name: { value: "Orders" }, id: { value: 0 }, path: { value: "admin/orders" } },
    { name: { value: "Products" }, id: { value: 1 }, path: { value: "admin/products" } },
    { name: { value: "Categories" }, id: { value: 2 }, path: { value: "admin/categories" } },
    { name: { value: "Discounts" }, id: { value: 3 }, path: { value: "admin/discounts" } }
]

const initialState: NavigationState = {
    panels: panels,
    selectedId: panels[0].id,
    selectedPanel: panels[0],
    isModalOpen : false
};

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setActivePanel(state, action: PayloadAction<PanelId>) {
            state.selectedId = action.payload;
            state.selectedPanel = state.panels.find(panel => panel.id.value === action.payload.value) as Panel;
        },
        setPanels(state, action: PayloadAction<Panel[]>) {
            state.panels = action.payload;
        },
          openModel(state) {
            state.isModalOpen = true
        },
        closeModel(state) {
            state.isModalOpen = false
        },
    }
});

export const { setActivePanel,setPanels,openModel,closeModel } = navigationSlice.actions;
export default navigationSlice.reducer;