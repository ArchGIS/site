/**
 * Created by nardm on 15.07.17.
 */


import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import { Observable } from "rxjs/Observable";
import {Cookie} from "ng2-cookies";
import {TokenService} from "../token/token.serviece";
import {Answer} from "../../model/answer";


@Injectable()
export class ConstService {

    constructor(private http: Http,
                private tokenService: TokenService) {
    }

    get<T>(url: string): Promise<Answer<T>> {
        return this.tokenService.token()
            .map(token => new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }))
            .mergeMap(headers => this.http
                .get(url, {headers: headers})
                .map(res => {
                    debugger;
                    return res.json();
                }))
            .toPromise()
            .catch(this.handleError);
    }

    post<T, G>(url: string, item: T): Promise<G> {
        return this.tokenService.token()
            .map(token => new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }))
            .mergeMap(headers => this.http.post(url,
                item,
                {headers: headers})
                .map(a => a.json()))
            .toPromise()
            .catch(this.handleError);
    }

    put<T>(url: string, item: T): Promise<T> {
        return this.tokenService.token()
            .map(token => new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }))
            .mergeMap(headers =>
                this.http.put(url,
                    item,
                    {headers: headers})
                    .map(a => a.json()))
            .toPromise()
            .catch(this.handleError);
    }

    postSingle<T>(url: string): Promise<Answer<T>> {
        return this.tokenService.token()
            .map(token => new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }))
            .mergeMap(headers => this.http
                .post(url, null,
                    {headers: headers})
                .map(a => a.json()))
            .toPromise()
            .catch(this.handleError);
    }

    delete(url: string) {
        return this.tokenService.token()
            .map(token => new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }))
            .mergeMap(headers => this.http
                .delete(url, {headers: headers})
                .map(a => a.json()))
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

