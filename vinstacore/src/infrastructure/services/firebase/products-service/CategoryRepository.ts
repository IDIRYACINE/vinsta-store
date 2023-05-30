import { CreateResponse, DeleteResponse, FindResponse, IRepository, LoadProps, LoadResponse, Repository, UpdateResponse } from "@vinstacore/index";
import { CreateCategoryProps, DeleteCategoryProps, FindCategoryProps, UpdateCategoryProps } from "@vinstacore/infrastructure/ports/services/CategoryServicePort";

import { Firestore, getDoc, doc, collection, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

export class CategoryRepostiroy implements IRepository {
    categoryCollection = "categories";

    public constructor(private readonly firestore: Firestore) { }

    async find(options: FindCategoryProps): Promise<FindResponse> {

        const categoryDoc = doc(this.firestore, this.categoryCollection, options.id.value)

        const category = (await getDoc(categoryDoc)).data


        return {
            data: category as any
        }
    }

    async load(options: LoadProps): Promise<LoadResponse> {
        const collectionRef = collection(this.firestore, this.categoryCollection);

        return getDocs(collectionRef).then((snapshot) => {
            const results: Repository.Category[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data() as Repository.Category;
                results.push(data);
            });

            return {
                results,
                totalCount: results.length,
            };
        });
    }

    async create(options: CreateCategoryProps): Promise<CreateResponse> {
        const category: Repository.Category = {
            productCount: 0,
            id: options.id.value,
            name: options.name.value,
            imageUrl: options.image.image,
        };

        const categoryDoc = doc(this.firestore, this.categoryCollection, category.id);

        return setDoc(categoryDoc, category).then(() => ({}));
    }

    async update(options: UpdateCategoryProps): Promise<UpdateResponse> {
        const categoryDoc = doc(this.firestore, this.categoryCollection, options.id.value);

        const updateData: Partial<Repository.Category> = {};



        return updateDoc(categoryDoc, updateData).then(() => ({}));
    }

    delete(options: DeleteCategoryProps): Promise<DeleteResponse> {
        const categoryDoc = doc(this.firestore, this.categoryCollection, options.id.value);

        return deleteDoc(categoryDoc).then(() => ({}));
    }
}
