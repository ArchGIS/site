/**
 * Created by nardm on 12.07.17.
 */
import {Injectable, Inject} from '@angular/core';
import {TRANSLATIONS} from "../../translation/translations";

@Injectable()
export class TranslateService {
    public langu: lang;
    constructor(){

    }
}


enum lang {
    ru, en
}