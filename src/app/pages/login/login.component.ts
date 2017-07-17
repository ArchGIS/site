/**
 * Created by nardm on 11.07.17.
 */

import {
    Component,
} from '@angular/core';
import { AppState } from './app.service';
import {TranslateService} from "../../theme/services/translate/translate.service";
import {ConstService} from "../../theme/services/http/service-const.service";
import {Consts} from "../../const/app-const";


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss' ]
})
export class LoginComponent {

    constructor(private _translate: TranslateService,
                private constService: ConstService) {
    }

    public postSub(code: string, password: string): void {
        let item: postLogin = <postLogin> {
            code: code,
            password: password
        };
        let url = `${Consts.baseURL}/login`;
        this.constService.post<postLogin, any>(url, item)
            .then(res=>{
                debugger;
            })
    }

}


export interface postLogin{
    code: string,
    password: string
}
