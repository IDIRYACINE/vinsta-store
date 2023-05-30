import { makeAutoObservable } from "mobx";
import { Repository } from "@vinstacore";
import router from "next/navigation";
import { mockProductRows } from "../../table";



class ProductsState {
    

    isModalOpen = false;
    isLoaded = false;
    products: Repository.Product[] = []
    product: Repository.Product | undefined

    constructor() {
        makeAutoObservable(this)
    }

    openModal() {
        this.isModalOpen = true
    }

    closeModal() {
        this.isModalOpen = false
    }

    setProducts(products: Repository.Product[]) {
        this.products = products
    }

    displayDeleteModal(item: Repository.Product) {
        this.isModalOpen = true;
        this.product = item
    }

    deleteProduct() {
        if (this.product === undefined) return;


        const index = this.products.findIndex(product => product.id === (this.product as Repository.Product).id);

        if (index !== -1) {
            this.products.splice(index, 1);
        }


    }

    addProduct(product: Repository.Product) {
        this.products.push(product)
    }

    updateProduct(product: Repository.Product) {
        if(this.product === undefined) return

        const index = this.products.findIndex(product => product.id === (this.product as Repository.Product).id );

        if (index !== -1) {
            this.products[index] = product;
        }
    }

    editProduct(item: Repository.Product) {
        this.product = item
        router.push(`/admin/Products/edit/${item.id}`)

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