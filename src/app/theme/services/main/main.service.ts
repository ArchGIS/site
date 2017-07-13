/**
 * Created by nardm on 13.07.17.
 */
import {Injectable} from "@angular/core";
import {Consts} from "../../const/app-const";
import {ConstService} from "../http/service-const.service";
import {Router} from "@angular/router";

@Injectable()
export class MainService {

    constructor(private service: ConstService,
                private router: Router) {
    }

    getMainCount(){

    }


}
