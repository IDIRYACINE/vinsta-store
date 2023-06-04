import { LoadProps, Repository } from "@vinstacore/index";
import { CreateCategoryProps, DeleteCategoryProps, FindCategoryProps, ICategoryRepostiroy, UpdateCategoryProps } from "@vinstacore/infrastructure/ports/services/CategoryServicePort";

import { Firestore, getDoc, doc, collection, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

export class CategoryRepostiroy implements ICategoryRepostiroy {
    categoryCollection = "categories";

    public constructor(private readonly firestore: Firestore) { }

    async find(options: FindCategoryProps): Promise<Repository.Category> {

        const categoryDoc = doc(this.firestore, this.categoryCollection, options.id.value)

        const category = (await getDoc(categoryDoc)).data();

        return category as Repository.Category

    }

    async load(options: LoadProps): Promise<Repository.Category[]> {
        const collectionRef = collection(this.firestore, this.categoryCollection);

        return getDocs(collectionRef).then((snapshot) => {
            const results: Repository.Category[] = [];

            snapshot.forEach((doc) => {
                const data = doc.data() as Repository.Category;
                results.push(data);
            });

            return results

        });
    }

    async create(options: CreateCategoryProps): Promise<void> {
        const category: Repository.Category = {
            productCount: 0,
            id: options.id.value,
            name: options.name.value,
            imageUrl: options.image.image,
        };

        const categoryDoc = doc(this.firestore, this.categoryCollection, category.id);

        setDoc(categoryDoc, category).then(() => ({}));
    }

    async update(options: UpdateCategoryProps): Promise<void> {
        const categoryDoc = doc(this.firestore, this.categoryCollection, options.id.value);

        const updateData: Partial<Repository.Category> = {};



        updateDoc(categoryDoc, updateData).then(() => ({}));
    }

    async delete(options: DeleteCategoryProps): Promise<void> {
        const categoryDoc = doc(this.firestore, this.categoryCollection, options.id.value);

        deleteDoc(categoryDoc).then(() => ({}));
    }
}
