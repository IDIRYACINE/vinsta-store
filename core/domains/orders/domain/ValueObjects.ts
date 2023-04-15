


export class OrderId{
    constructor(public readonly value:number){}
}

enum EOrderStatus{confirmred,declined,cancelled,onHold}

export class OrderStatus{
    constructor(public readonly value:EOrderStatus){}
}