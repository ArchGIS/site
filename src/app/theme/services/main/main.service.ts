/**
 * Created by nardm on 13.07.17.
 */
import {Injectable} from "@angular/core";
import {ConstService} from "../http/service-const.service";
import {Router} from "@angular/router";
import {Consts} from "../../../const/app-const";

@Injectable()
export class MainService {

    constructor(private service: ConstService,
                private router: Router) {
    }

    getMainCount(): Promise<any> {
        let url = `${Consts.baseURL}search/count`;
        return this.service.get(url);
    }


}
