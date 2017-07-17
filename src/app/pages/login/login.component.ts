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
import {LoginService} from "../../theme/services/login/login.service";


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss' ]
})
export class LoginComponent {

    constructor(private _translate: TranslateService,
                private service: LoginService,
                private constService: ConstService) {
    }

    public postSub(code: string, password: string): void {
        let item: postLogin = <postLogin> {
            username: code,
            password: password
        };
        this.service.postLogin(item)
            .then(res=>{
                debugger;
            })
    }
}


export interface postLogin{
    username: string,
    password: string
}
