

enum BaseRoutes {
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

export {BaseRoutes,CategoryRoutes,ProductRoutes}