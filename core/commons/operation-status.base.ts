enum OStatus {
    serverError,
    badRequest,
    connectionError,
    success,
    sucessEmptyResponse
}

enum CStatus {

}

export abstract class OperationStatus {
    constructor(
        public readonly status: OStatus,
        public readonly statusCode: CStatus
    ) { }
}

export class OperationServerError extends OperationStatus {

}

export class OperationSuccess extends OperationStatus {

}


export class OperationBadRequest extends OperationStatus {

}