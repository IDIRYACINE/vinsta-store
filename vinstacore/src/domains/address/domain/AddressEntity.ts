import { UserPhone, UserName } from "@vinstacore/domains/users";
import { City, } from "./ValueObjects";

export class Contact {

    constructor(public readonly city: City, public readonly phone: UserPhone, public readonly customer: UserName) { }
}