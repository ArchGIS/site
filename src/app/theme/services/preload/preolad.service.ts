/**
 * Created by nardm on 18.07.17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class PreoladSpinner {

    private _selector:string = 'sk-folding-cube';
    private _selectorMain:string = 'preolader';

    private _element:HTMLElement;
    private _elementManager:HTMLElement;

    constructor() {
        this._element = document.getElementById(this._selector);
        this._elementManager = document.getElementById(this._selectorMain);
    }

    public show():void {
        this._element.style['display'] = 'block';
    }

    public showMain():void {
        this._element.style['display'] = 'block';
    }

    public hide(delay:number = 0):void {
        setTimeout(() => {
            this._element.style['display'] = 'none';
            document.body.style.background = '#ffffff'
        }, delay);
    }

    public hideMain(delay:number = 0):void {
        this._elementManager = document.getElementById(this._selectorMain);
        this._elementManager.style['display'] = 'none';
    }
}
