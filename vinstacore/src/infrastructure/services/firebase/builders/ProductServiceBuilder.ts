

import { FirebaseApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { CategoryMapper } from "@vinstacore/domains/category";
import { ProductMapper } from "@vinstacore/domains/product";
import { CategoryServicePort } from "@vinstacore/infrastructure/ports/services/CategoryServicePort";
import { ProductServicePort } from "@vinstacore/infrastructure/ports/services/ProductServicePort";
import { getDatabase } from "firebase/database";
import { CategoryRepostiroy } from "../products-service/CategoryRepository";
import { FirebaseCategoryService } from "../products-service/CategoryService";
import { ProductRepostiroy } from "../products-service/ProductRepository";
import { FirebaseProductService } from "../products-service/ProductService";

let productService: FirebaseProductService;
let categoryService: FirebaseCategoryService;

export function buildProductService(firebaseApp: FirebaseApp): ProductServicePort {
    if (productService !== undefined) {
        return productService;
    }

    const db = getDatabase(firebaseApp)
    const productMapper = new ProductMapper();

    const productRepo = new ProductRepostiroy(db, productMapper);

    productService = new FirebaseProductService(
        productRepo,
        productMapper
    );

    return productService;
}



export function buildCategoryService(firebaseApp: FirebaseApp): CategoryServicePort {
    if (categoryService !== undefined) {
        return categoryService;
    }

    const firestore = getFirestore(firebaseApp)

    const categoryRepo = new CategoryRepostiroy(firestore);
    const categoryMapper = new CategoryMapper();

    categoryService = new FirebaseCategoryService(
        categoryRepo,
        categoryMapper
        

    );

    return categoryService;
}

