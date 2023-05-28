import { makeAutoObservable } from "mobx";
import { ProductEntity } from "@vinstacore";
import router from "next/dist/client/router";
import { mockProductRows } from "../../table";



class ProductsState {
    

    isModalOpen = false;
    isLoaded = false;
    products: ProductEntity[] = []
    product: ProductEntity | undefined

    constructor() {
        makeAutoObservable(this)
    }

    openModal() {
        this.isModalOpen = true
    }

    closeModal() {
        this.isModalOpen = false
    }

    setProducts(products: ProductEntity[]) {
        this.products = products
    }

    displayDeleteModal(item: ProductEntity) {
        this.isModalOpen = true;
        this.product = item
    }

    deleteProduct() {
        if (this.product === undefined) return;


        const index = this.products.findIndex(product => product.equals(this.product as ProductEntity));

        if (index !== -1) {
            this.products.splice(index, 1);
        }


    }

    addProduct(product: ProductEntity) {
        this.products.push(product)
    }

    updateProduct(product: ProductEntity) {
        if(this.product === undefined) return

        const index = this.products.findIndex(product => product.equals(this.product as ProductEntity));

        if (index !== -1) {
            this.products[index] = product;
        }
    }

    editProduct(item: ProductEntity) {
        this.product = item
        router.push(`/admin/Products/edit/${item.id.value}`)

    }

    loadMockProducts() {
        if (!this.isLoaded)
            mockProductRows().then((res) => {
                this.isLoaded = true
                this.setProducts(res)
            })
    }



}

export { ProductsState as ProductsState }