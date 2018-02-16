/**
 * Created by nardm on 18.07.17.
 */
import {Injectable} from '@angular/core';
import {ConstService} from "../http/service-const.service";
import {Consts} from "../../../const/app-const";
import {Http, Response} from "@angular/http";
    import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import { Observable } from "rxjs/Observable";
@Injectable()
export class SearchService {


    constructor(private service: ConstService,
                private http: Http) {

    }


    getItems() {
        let url = 'http://185.147.81.8:8181/v1/graphql';
        return this.http
            .post(url, '{"query": "{Site(id:11284)  {knowledges  {research  { id name}}}}"}')
            .map(res => {
                res.json();
                debugger;
            }).toPromise()
    }

    getItemsAuthor(like?: string) {
        let url = `${Consts.baseURL}api/graphql`;
        let item = '{"query": "{Author{id name researches{name}}}"}';
        return this.service.post<any,any>(url, item);
    }

    getResearches() {
        let url = `${Consts.baseURL}api/graphql`;
        let item = '{"query": "{Research{id name year type{ru_name} author{name} report{id name}}}"}';
        return this.service.post<any,any>(url, item);
    }
    getCulture() {
        let url = `${Consts.baseURL}api/graphql`;
        let item = '{"query": "{Culture{id ru_name}}"}';
        return this.service.post<any,any>(url, item);
    }

    getAuthorID(id: number) {
        let url = `${Consts.baseURL}api/graphql`;
         let item = `{"query": "{Author(id:${id}){name researches{id name knowledges{id name site{epoch{id ru_name}  spatial{ date x y type{id ru_name  }}}} publication{id name published_at} report{id year name fileid code }}}}"}`;;
        return this.service.post<any,any>(url, item);
    }
    getMonumentID(id: number) {
        let url = `${Consts.baseURL}api/graphql`;
        let item = `{"query": "{Site(id:${id}){id siteType{id ru_name} artifacts_count excavations{name id area}  epoch{id ru_name}  spatial{ date x y sites{knowledges{name    }}  type{id ru_name  }} knowledges{ id name description excavations_count artifacts_count culture{id ru_name}  research{id name year description type{id ru_name} author{id name} report{id  year name} excavations{id name area boss artifacts{id name depth excRegion}} radiocarbons{id name date s sampleDesc bcadSecondTop bcadSecondBot } }} } }"}`;
        return this.service.post<any,any>(url, item);
    }

    getResearchID(id: number) {
        let url = `${Consts.baseURL}api/graphql`;
        let item = `{"query": "{Research(id:${id}){id name year description type{id ru_name} author{id name} report{id  year name} publication{id name published_at} excavations{id name area boss artifacts{id name depth excRegion}} radiocarbons{id name date s sampleDesc bcadSecondTop bcadSecondBot } coauthors{id name} knowledges{ culture{id ru_name} id name description excavations_count artifacts_count site{ heritages{ id name}  epoch{id ru_name}  spatial{ date x y type{id ru_name  }}}} }}"}`;
        return this.service.post<any,any>(url, item);
    }

    getReportID(id: number) {
        let url = `${Consts.baseURL}api/graphql`;
        let item = `{"query": "{Report(id:${id}){ year name code filed researches{ id name year description type{id ru_name} author{id name}  publication{id name published_at} excavations{id name area boss artifacts{id name depth excRegion}} radiocarbons{id name date s sampleDesc bcadSecondTop bcadSecondBot } coauthors{id name} knowledges{ culture{id ru_name} id name description excavations_count artifacts_count site{ heritages{ id name}  epoch{id ru_name}  spatial{ date x y type{id ru_name  }}}} }}}"}`;
        return this.service.post<any, any>(url, item);
    }

    getPublicationID(id: number) {
        let url = `${Consts.baseURL}api/graphql`;
        let item = `{"query": "{Publication(id:${id}){ published_at name pages researches{ id name year description type{id ru_name} author{id name} report{id  year name} publication{id name published_at} excavations{id name area boss artifacts{id name depth excRegion}} radiocarbons{id name date s sampleDesc bcadSecondTop bcadSecondBot } coauthors{id name} knowledges{ culture{id ru_name} id name description excavations_count artifacts_count site{ heritages{ id name}  epoch{id ru_name}  spatial{ date x y type{id ru_name  }}}} }}}"}`;
        return this.service.post<any, any>(url, item);
    }


    getExcavationID(id: number) {
        let url = `${Consts.baseURL}api/graphql`;
        let item = `{"query": "{Excavation(id:${id}){id name area boss  researches {id name year description type{id ru_name} author{id name} report{id  year name} publication{id name published_at} excavations{id name area boss artifacts{id name depth excRegion}} radiocarbons{id name date s sampleDesc bcadSecondTop bcadSecondBot } coauthors{id name} knowledges{ culture{id ru_name} id name description excavations_count artifacts_count site{ heritages{ id name}  epoch{id ru_name}  spatial{ date x y type{id ru_name  }}}}} }}"}`;
        return this.service.post<any,any>(url, item);
    }

    getArtifactID(id: number) {
        let url = `${Consts.baseURL}api/graphql`;
        let item = `{"query": "{Artifact(id:${id}){id name depth excRegion  excavation{id name area boss sites{id  knowledges{id name description} epoch{id ru_name}  spatial{ date x y type{id ru_name  }}} researches{id name year description}} }}"}`;
        return this.service.post<any,any>(url, item);
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
