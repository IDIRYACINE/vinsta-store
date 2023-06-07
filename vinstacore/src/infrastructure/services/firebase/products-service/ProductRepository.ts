import { CreateResponse, DeleteResponse, FindResponse, IRepository, LoadResponse, ProductMapper, Repository, UpdateProps, UpdateResponse } from "@vinstacore/index";
import { CreateProductProps, DeleteProductProps, FindProductProps, LoadProductProps, UpdateProductProps } from "@vinstacore/infrastructure/ports/services/ProductServicePort";

import { Database, get, ref, remove, set, update } from "firebase/database";


export class ProductRepostiroy  implements IRepository {

    productCollection = "products"

    public constructor(private readonly db:Database,private readonly mapper:ProductMapper) {


    }

    async find(options: FindProductProps): Promise<FindResponse> {
        
        const productsRef = ref(this.db, `${options.categoryId.value}/${options.productId.value}`);

        const product = get(productsRef)


        return {
            data: product as any
        }
    }
    async load(options: LoadProductProps): Promise<LoadResponse> {
        const productsRef = ref(this.db, `${this.productCollection}/${options.categoryId.value}`)

        return get(productsRef).then((snapshot) => {
            const results: Repository.Product[] = [];

            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val() as Repository.Product;
                results.push(data);
            });

            return {
                results,
                totalCount: results.length,
            };
        });
    }

    async create(options:  CreateProductProps): Promise<CreateResponse> {


        const productRef = ref(this.db, `${this.productCollection}/${options.cateogryId.value}/${options.productId.value}`)

        const product : Repository.Product = this.mapper.toPersistence(options.product)

        return set(productRef, product).then(() => {
            return {}
        })
        
    }

    async update(options:  UpdateProductProps): Promise<UpdateResponse> {
        const productRef = ref(this.db, `${this.productCollection}/${options.categoryId.value}/${options.productId.value}`)
        
        const updateData: Partial<Repository.Product> = options.updatedFields;


        return update(productRef, updateData).then(() => ({}));
    }

    async delete(options:  DeleteProductProps): Promise<DeleteResponse> {
        const productRef = ref(this.db, `${this.productCollection}/${options.categoryId.value}/${options.productId.value}`)

        return remove(productRef).then(() => ({}));
    }
}
