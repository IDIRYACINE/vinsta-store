

export class City{
    constructor (public readonly value:string,public readonly code:number){}

    static fromString(value:string):City{
        return new City(value,1)
    }
}

export class CitySub{
    constructor (public readonly value:string){}

    static fromString(value:string):CitySub{
        return new CitySub(value)
    }
}