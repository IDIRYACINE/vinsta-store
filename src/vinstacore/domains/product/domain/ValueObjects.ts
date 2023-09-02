
export class ProductId {

    constructor(public readonly value: string) {

    }
}

export class ProductName {

    constructor(public readonly value: string) {

    }


}

export class ProductPrice {

    constructor(public readonly value: number) {

    }

}

export class ProductDescription {

    constructor(public readonly value: string) {

    }
}

export class ProductQuantity {
    constructor(public readonly value: number) {

    }

}

export class ProductImage {
    constructor(public readonly value: string, public readonly id: number) {

    }
}

export class SizeId {
    equalsRaw(sizeId: string | number): boolean {
        let compareValue = sizeId

        if (typeof sizeId === 'string') {
            compareValue = parseInt(sizeId)
        }

        return this.value === compareValue
    }

    static fromValue(id: number): SizeId {
        return new SizeId(id)
    }

    constructor(public readonly value: number) {

    }
}

export class SizeName {
    static fromValue(size: string): SizeName {
        return new SizeName(size)
    }
    constructor(public readonly value: string,) {

    }
}


export class ColorId {

    equalsRaw(colorId: string | number): boolean {
        let compareValue = colorId

        if (typeof colorId === 'string') {
            compareValue = parseInt(colorId)
        }

        return this.value === compareValue
    }

    static fromValue(id: number): ColorId {
        return new ColorId(id)
    }

    constructor(public readonly value: number) {

    }
}

export class ColorName {
    static fromValue(size: string): ColorName {
        return new ColorName(size)
    }
    constructor(public readonly value: string,) {

    }
}