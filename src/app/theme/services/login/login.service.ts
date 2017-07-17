/**
 * Created by nardm on 17.07.17.
 */

import {Injectable} from "@angular/core";
import {ConstService} from "../http/service-const.service";
import {Router} from "@angular/router";
import {Consts} from "../../../const/app-const";
import {postLogin} from "../../../pages/login/login.component";
import {Http,Headers,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

    constructor(private service: ConstService,
                private http: Http,
                private router: Router) {
    }

    private headers = new Headers({
        'Content-Type': 'application/json'});

    postLogin(item: postLogin): Promise<any> {
        let url = `${Consts.baseURL}login`;
        return this.http.post(url, item, {headers: this.headers})
            .map(a => {
                debugger;
                return a;
            })
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}
