import { City, CitySub } from "./ValueObjects";

export class Address {

    constructor(public readonly city: City, public readonly subCity: CitySub) { }
}