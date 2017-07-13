import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import {Cookie} from "ng2-cookies/ng2-cookies";
import {Observable} from "rxjs/Observable";
import { Router } from '@angular/router';
import {LoginPost} from "../../model/login";
import {Consts} from "../../../const/app-const";
import {GUID} from "../guid/guid";

@Injectable()
export class TokenService {
  private static deviceIdKey: string = 'device_id';
  private tokenUrl = Consts.baseURL;
  private refreshTokenUrl = Consts.baseURL;
  private headers = new Headers({'Content-Type': 'application/json'});
  private tokenPromise: Promise<String>;
  private tokenObservable: Observable<String>;
  public loginToken: String;

  constructor(private http: Http,
              private router: Router) {
  }


  public token(): Observable<String> {
    this.loginToken = Cookie.get('login_token');
    if (this.loginToken !== null && this.loginToken !== "null" && this.loginToken !== undefined) {
      return Observable.of(this.loginToken);
    }
    let deviceId: string = Cookie.get(TokenService.deviceIdKey);
    if (deviceId == null) {
      deviceId = GUID.getNewGUIDString().toString();
      Cookie.set('device_id', deviceId, 30239999);
    }
    let params : LoginPost= <LoginPost>{
      device_id: deviceId,
      device_type: undefined,
      os_version: '',
      app_version: '1.0.1',
      app_build: 1
    };

    return this.http
        .post(this.tokenUrl, JSON.stringify(params), {headers: this.headers})
        .map(a => {
          let response = a.json();
          if (response.success) {
            this.tokenPromise = null;
            return response.data.access_token;
          }
          else {
            return null;
          }
        });
  }

  saveLoginToken(token: String, expires_in: number): String {
    debugger;
    this.loginToken = token;
    Cookie.set('login_token', token.toString(), expires_in);
    return token;
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
