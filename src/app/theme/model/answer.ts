/**
 * Created by nardm on 13.07.17.
 */

export interface Answer<T> {
    success :Boolean;
    data :T;
    message :ResponseDescription ;
}
export interface ResponseDescription {
    code:number;
    message:String;
}
