/**
 * Created by nardm on 18.07.17.
 */
import {Injectable} from '@angular/core';
import {ConstService} from "../http/service-const.service";
import {Consts} from "../../../const/app-const";

@Injectable()
export class SearchService {


    constructor(private service: ConstService) {

    }

    getSearchMonument(name: string, epochID: number, typeID: number, lang?: string, offset?: number, limit?: number): Promise<any> {
        let url = `${Consts.baseURL}api/sites?site_name=${name}&epochID=${epochID}&type_id=${typeID}`;
        debugger;
        /*if (lang&&offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
            url = this.service.lang(url, lang);
        }
        if (lang){
            url = this.service.lang(url, lang);
        }
        if (offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
        }*/
        return this.service.get<any>(url);
    }

    getSearchAuthor(name: string, lang?: string, offset?: number, limit?: number): Promise<any> {
        let url = `${Consts.baseURL}api/authors?${name}`;
        if (lang){
            url = this.service.lang(url, lang);
        }
        /*if (offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
        }
        if (lang&&offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
            url = this.service.lang(url, lang);
        }*/
        return this.service.get<any>(url);
    }

    getSearchStudy(res_name: string, res_year: number, lang?: string, offset?: number, limit?: number): Promise<any> {
        let url = `${Consts.baseURL}api/researches?res_name=${res_name}&res_year=${res_year}`;
        if (!res_year){
            url = `${Consts.baseURL}api/researches?res_name=${res_name}&res_year=`;
        }
        if (lang){
            url = this.service.lang(url, lang);
        }
        /*if (offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
        }
        if (lang&&offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
            url = this.service.lang(url, lang);
        }*/
        return this.service.get<any>(url);
    }

    getSearchReport(name: string, year: number, lang?: string, offset?: number, limit?: number): Promise<any> {
        let url = `${Consts.baseURL}api/reports?name=${name}&year=${year}`;
        if (!year){
            url = `${Consts.baseURL}api/reports?name=${name}&year=`;
        }
        if (lang){
            url = this.service.lang(url, lang);
        }
        /*if (offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
        }
        if (lang&&offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
            url = this.service.lang(url, lang);
        }*/
        return this.service.get<any>(url);
    }

    getSearchOCN(name: string, lang?: string, offset?: number, limit?: number): Promise<any> {
        let url = `${Consts.baseURL}api/heritages?name=${name}`;
        if (lang){
            url = this.service.lang(url, lang);
        }
        /*if (offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
        }
        if (lang&&offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
            url = this.service.lang(url, lang);
        }*/
        return this.service.get<any>(url);
    }

    getSearchOpening(exc_name: string, res_year: number, author_name: string, lang?: string, offset?: number, limit?: number): Promise<any> {
        let url = `${Consts.baseURL}api/excavations?exc_name=${exc_name}&res_year=${res_year}&author_name=${author_name}`;
        if (!res_year){
            url = `${Consts.baseURL}api/excavations?exc_name=${exc_name}&res_year=&author_name=${author_name}`;
        }
        if (lang){
            url = this.service.lang(url, lang);
        }
        /*if (offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
        }
        if (lang&&offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
            url = this.service.lang(url, lang);
        }*/
        return this.service.get<any>(url);
    }

    getSearchRadicarbonDating(index: string, lang?: string, offset?: number, limit?: number): Promise<any> {
        let url = `${Consts.baseURL}api/radiocarbons?index=${index}`;
        if (lang){
            url = this.service.lang(url, lang);
        }
        /*if (offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
        }
        if (lang&&offset!==undefined&&limit!==undefined){
            url = this.service.offsetAndLimit(url, offset, limit);
            url = this.service.lang(url, lang);
        }*/
        return this.service.get<any>(url);
    }

    getEpoch(lang: string): Promise<any> {
        let url = `${Consts.baseURL}api/epochs?lang=${lang}`;
        return this.service.get<any>(url)
    }

    getSiteTypes(lang: string): Promise<any> {
        let url = `${Consts.baseURL}api/site_types?lang=${lang}`;
        return this.service.get<any>(url)
    }


}
