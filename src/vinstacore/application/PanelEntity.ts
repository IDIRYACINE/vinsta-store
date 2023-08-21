




export interface PanelName {
    value: string
}

export interface PanelPath {
    value: string

}

export interface PanelIconClassName {
    value: string

}

export interface PanelId {


    value: number


}

export interface Panel {
    name: PanelName,
    id: PanelId,
    path: PanelPath,
    iconClassName?: PanelIconClassName

}



export abstract class Routes {
    admin = "/admin"
    adminProducts = `${this.admin}/products`
    adminCategories = `${this.admin}/categories`
    adminDiscounts = `${this.admin}/discounts`
    dashbaord = "/"
    categories = `${this.dashbaord}/categories`
    category = `${this.dashbaord}/category`
    product = `${this.dashbaord}/product`
    cart = `${this.dashbaord}/cart`
    delivery = `${this.dashbaord}/delivery`
}