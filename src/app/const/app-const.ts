/**
 * Created by nardm on 13.07.17.
 */
export class Consts{
    static guid: string="";
    static device_type: string="web";
    static os_version: string = "Ubuntu 16.04";
    static app_version: string="1.0";
    static app_type: string="web";
    static release: boolean = false;
    public static baseURL: string = Consts.release?'bla-bla':'http://185.147.81.8:8080/';
}
