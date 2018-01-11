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
        let url = `${Consts.baseURL}api/counts`;
        //let item: any = '{"counts":["Heritage","Monument","Research","Artifact","Radiocarbon","Report","Monography","Article","ArchiveDoc","Author"]} Name';
        //return this.service.post<any, CountItem[]>(url, item);
        return this.service.get(url);
    }

}

export interface CountItem{
    name: string,
    count: string
}


export interface OCN{
    title: string[];
    item: ocn_item[];
}
export interface ocn_item{
    id: number;
    item: string[];
}


