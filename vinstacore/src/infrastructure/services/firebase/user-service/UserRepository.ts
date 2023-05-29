import { CreateProps, CreateResponse, DeleteProps, DeleteResponse, FindProps, FindResponse, IRepository, LoadProps, LoadResponse, UpdateProps, UpdateResponse } from "@vinstacore/infrastructure/ports/IRepositories";
import { FindUserProps } from "@vinstacore/infrastructure/ports/services/UserServicePort";

import { Auth,  signInWithEmailAndPassword } from "firebase/auth";
import {  Firestore, getDoc, doc } from "firebase/firestore";

export class FirebaseUserRepository implements IRepository {

    userCollection = "users"

    public constructor(private readonly auth:Auth,private readonly firestore:Firestore,) {


    }


    async find(find: FindUserProps): Promise<FindResponse> {

        return signInWithEmailAndPassword(this.auth, find.identifier, find.password)
            .then(async (userCredential) => {
                const user = userCredential.user

                if (user === null) {
                    return {
                        error: {
                            name: "UserNotFound",
                            message: ""
                        }
                    }
                }
                const userDocRef = doc(this.firestore, "users",user.uid)

                const role = await (await getDoc(userDocRef)).get("role")


                return {
                    data: {
                        id: user.uid,
                        name: user.displayName ?? "",
                        phone: user.email ?? "",
                        isAdmin: role === "admin"
                    }
                }
            }).catch((error) => {
                return {
                    error: error
                }
            })

    }

    load(load: LoadProps): Promise<LoadResponse> {
        throw new Error("Method not implemented.");
    }
    create(create: CreateProps): Promise<CreateResponse> {
        throw new Error("Method not implemented.");
    }
    update(update: UpdateProps): Promise<UpdateResponse> {
        throw new Error("Method not implemented.");
    }

    delete(delte: DeleteProps): Promise<DeleteResponse> {
        throw new Error("Method not implemented.");
    }

}