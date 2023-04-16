
export class PageProp {
    constructor(public readonly page: number) { }
}


export class LimitProp {
    constructor(public readonly limit: number) { }
}

export class UpdatedField {
    constructor(public readonly fieldName: string,
        public readonly newValue: unknown,
    ) { }
}