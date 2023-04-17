import { makeAutoObservable } from "mobx"

import panels, { PanelEntity } from "../domain/PanelEntity"

export default class NavigationState {
    private currentIndex = 0

    constructor(){
        makeAutoObservable(this)
    }

    getCurrentIndex(): number {
        return this.currentIndex
    }

    getCurrentPanel():PanelEntity{
        return panels[this.currentIndex]
    }

    setCurrentIndex(index: number) {
        this.currentIndex = index
    }
}

