

enum AdminRoutes {
    admin = "/admin",
    categories = "/admin/categories",
    products = "/admin/products",
    orders = "/admin/orders",
}

enum CategoryRoutes {
    create = "/admin/categories/create",
    edit = "/admin/categories/edit",
}

enum ProductRoutes {
    create = "/admin/products/create",
    edit = "/admin/products/edit",
}

enum ClientRoutes {
    home = "/",
    products = "/category",
    productDetaills = "/product",
    cart = "/cart",
    delivery = "/delivery"
}

export { AdminRoutes, CategoryRoutes, ProductRoutes, ClientRoutes }