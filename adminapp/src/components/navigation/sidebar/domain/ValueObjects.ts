

export class PanelName{
    constructor(public readonly value:string){}
}

export class PanelPath{
    public readonly value:string

    constructor(value:string){
        this.value = `/admin/${value}`
    }
}

export class PanelIconClassName{
    constructor(public readonly value:string){

    }
}

export class PanelId{
    constructor(public readonly value:number){

    }
}