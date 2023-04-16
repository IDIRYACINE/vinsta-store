import { CreateProps, CreateResponse, DeleteProps, DeleteResponse, FindProps, FindResponse, IRepository, LoadProps, LoadResponse, UpdateProps, UpdateResponse } from "@vinstacore/infrastructure/ports/IRepositories";
import { FindUserProps } from "@vinstacore/infrastructure/ports/services/UserServicePort";

export class FirebaseUserRepository implements IRepository {

    find(find: FindUserProps): Promise<FindResponse> {
        return new Promise((resolve, reject) => {

            resolve({
                data: {
                    id: "1",
                    name: "name",
                    phone: "phone",
                    isAdmin: true
                }
            })
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