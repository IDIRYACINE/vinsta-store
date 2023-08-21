
export class ExceptionCode {
    constructor(public readonly code: number) {

    }
}

export class ExceptionName {
    constructor(public readonly name: string) {

    }
}

export class ExceptionBase {
    constructor(public readonly exceptionCode: ExceptionCode,
        public readonly exceptionName: ExceptionName) {

    }
}