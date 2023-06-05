




export interface PanelName {
    value: string
}

export interface PanelPath {
    value: string

}

export interface PanelIconClassName {
    value: string

}

export interface PanelId {


    value: number


}

export interface Panel {
    name: PanelName,
    id: PanelId,
    path: PanelPath,
    iconClassName?: PanelIconClassName

}
