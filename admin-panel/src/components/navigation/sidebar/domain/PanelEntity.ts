import { PanelIconClassName, PanelId, PanelName, PanelPath } from "./ValueObjects"

export class PanelEntity {
    constructor(public readonly name: PanelName,
        public readonly id: PanelId,
        public readonly path: PanelPath,
        public readonly iconClassName?: PanelIconClassName
    ) { }
}


const panels:PanelEntity[] = [
    new PanelEntity(new PanelName("Login"), new PanelId(0), new PanelPath("")),
    new PanelEntity(new PanelName("Orders"), new PanelId(1), new PanelPath("orders")),
    new PanelEntity(new PanelName("Products"), new PanelId(2), new PanelPath("products")),
    new PanelEntity(new PanelName("Categories"), new PanelId(3), new PanelPath("categories")),
    new PanelEntity(new PanelName("Discounts"), new PanelId(4), new PanelPath("discounts")),
]

export default panels