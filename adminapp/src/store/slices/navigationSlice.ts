import { Panel, PanelId, PanelName, PanelPath } from "@vinstastore/vinstacore";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface NavigationState {
    panels: Panel[];
    selectedId: PanelId;
    selectedPanel: Panel;

}


export const panels: Panel[] = [
    { name: { value: "Orders" }, id: { value: 0 }, path: { value: "/admin/orders" } },
    { name: { value: "Products" }, id: { value: 1 }, path: { value: "/admin/products" } },
    { name: { value: "Categories" }, id: { value: 2 }, path: { value: "/admin/categories" } },
    { name: { value: "Discounts" }, id: { value: 3 }, path: { value: "/admin/discounts" } }
]

const initialState: NavigationState = {
    panels: panels,
    selectedId: panels[0].id,
    selectedPanel: panels[0]
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
        }
    }
});

export const { setActivePanel,setPanels } = navigationSlice.actions;
export default navigationSlice.reducer;