/**
 * Created by nardm on 18.07.17.
 */
import {Injectable} from '@angular/core';
import {ConstService} from "../http/service-const.service";
import {Consts} from "../../../const/app-const";

@Injectable()
export class SearchService{



    constructor(private service: ConstService) {

    }

    getSearch(name: string, epochID: number, typeID: number, lang?: string, offset?: number, limit?:number): Promise<any> {
        let url = `${Consts.baseURL}api/sites?site_name=${name}&epochID=${epochID}&type_id=${typeID}`;
        return this.service.get<any>(url);
    }

    getEpoch(lang: string): Promise<any>{
        let url = `${Consts.baseURL}api/epochs?lang=${lang}`;
        return this.service.get<any>(url)
    }

    getSiteTypes(lang: string): Promise<any> {
        let url = `${Consts.baseURL}api/site_types?lang=${lang}`;
        return this.service.get<any>(url)
    }


}
