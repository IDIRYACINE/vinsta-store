import { UserPhone, UserName } from "@vinstacore/domains/users";
import { RawDestination, rawDestinations } from "./RawDestinations";
import { City, } from "./ValueObjects";

export class Contact {

    constructor(public readonly city: City, public readonly phone: UserPhone,
        public readonly customer: UserName,
        public readonly shipingPrice: number,
        public readonly shipingType: string
    ) { }
}

export class Destination {
    constructor(public readonly id: number, public readonly name: string,) { }

    static fromRaw(raw: RawDestination): Destination {
        return new Destination(raw.Code, raw.Wilaya);
    }


}

export const destinations = rawDestinations.map(Destination.fromRaw);

