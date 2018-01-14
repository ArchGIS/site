/**
 * Created by nardm on 21.08.17.
 */

export interface Coordinates {
    x: number;
    y: number;
}

export declare module MonumentInterface {

    export interface Item {
        site_names: string[];
        res_names: string[];
        epoch: number;
        type: number;
    }

    export interface Site {
        id: any;
        item: Item;
        coordinates: Coordinates;
    }

    export interface Monuments {
        sites: Item[];
    }

}

export declare module StudyInterface {

    export interface Item {
        research_name: string;
        report_name: string;
        year: number;
        author_name: string;
        res_type: string;
    }

    export interface Coordinate {
        x: number;
        y: number;
    }

    export interface Research {
        id: number;
        item: Item;
        coordinates: Coordinate[];
    }

    export interface Studys {
        researches: Research[];
    }

}

export declare module AuthorInterface {

    export interface Item {
        author_name: string;
        research_name: string[];
    }

    export interface Author {
        id: any;
        item: Item;
    }

    export interface Authors {
        authors: Author[];
    }

}

export declare module ReportInterface {

    export interface Item {
        report_name: string;
        research_name: string;
        author_name: string;
        report_year: number;
    }

    export interface Report {
        id: number;
        item: Item;
    }

    export interface Reposts {
        reports: Report[];
    }

}

export declare module OCNInterface {

    export interface Item {
        name: string;
        address: string;
        date: string;
    }

    export interface Coordinates {
        x: number;
        y: number;
    }

    export interface Heritage {
        id: number;
        item: Item;
        coordinates: Coordinates;
    }

    export interface OCNs {
        heritages: Heritage[];
    }

}





