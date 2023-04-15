
export class CartItem{
    private static idCounter = 0

    public readonly itemId:number

    constructor (id:number){
        this.itemId = id??CartItem.idCounter++
    }
}