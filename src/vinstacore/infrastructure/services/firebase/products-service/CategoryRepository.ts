import { LoadProps, Repository } from "@vinstacore/infrastructure/ports";
import { CreateCategoryProps, CreateCategoryResponse, DeleteCategoryProps, DeleteCategoryResponse, FindCategoryProps, ICategoryRepostiroy, LoadCategoryResponse, UpdateCategoryProps, UpdateCategoryResponse } from "@vinstacore/infrastructure/ports/services/CategoryServicePort";

import { Firestore, getDoc, doc, collection, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

export class CategoryRepostiroy implements ICategoryRepostiroy {
    categoryCollection = "categories";

    public constructor(private readonly firestore: Firestore) { }

    async find(options: FindCategoryProps): Promise<Repository.Category> {

        const categoryDoc = doc(this.firestore, this.categoryCollection, options.id.value)

        const category = (await getDoc(categoryDoc)).data();

        return category as Repository.Category

    }

    async load(options: LoadProps): Promise<LoadCategoryResponse> {
        const collectionRef = collection(this.firestore, this.categoryCollection);

        const snapshot = await getDocs(collectionRef);

        const results: Repository.Category[] = [];

        snapshot.forEach((doc) => {
            const data = doc.data() as Repository.Category;
            results.push(data);
        });


        return {data:results}

    }


    async create(options: CreateCategoryProps): Promise<CreateCategoryResponse> {
        const category: Repository.Category = {
            productCount: 0,
            id: options.id.value,
            name: options.name.value,
            imageUrl: options.image.image,
        };

        const categoryDoc = doc(this.firestore, this.categoryCollection, category.id);

        return setDoc(categoryDoc, category).then(() => ({}));
    }

    async update(options: UpdateCategoryProps): Promise<UpdateCategoryResponse> {
        const categoryDoc = doc(this.firestore, this.categoryCollection, options.id.value);




        return updateDoc(categoryDoc, options.updatedFields).then(() => ({}));
    }

    async delete(options: DeleteCategoryProps): Promise<DeleteCategoryResponse> {
        const categoryDoc = doc(this.firestore, this.categoryCollection, options.id.value);

        return deleteDoc(categoryDoc).then(() => ({}));
    }
}
