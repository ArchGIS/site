

import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output} from "@angular/core";
import {SearchService} from "../../../services/search/search.service";
import AuthorI = AuthorInter.AuthorI;
import Knowledge = AuthorInter.Knowledge;
import Author = AuthorInter.Author;
import {PreoladSpinner} from "../../../services/preload/preolad.service";
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from "@angular/material";

@Component({
  selector: 'table-data',
  templateUrl: 'table-data.component.html',
  styleUrls: ['table-data.component.scss'],
})
export class TableDataComponent implements OnChanges {


    constructor(private service: SearchService,
                public dialog: MdDialog,
                private _state: PreoladSpinner) {
    }

    @Input() itemsID: number;
    @Input() textSearch: string;
    @Output() back = new EventEmitter<boolean>();
    selectedTable: boolean = false;
    selectedTableCheck: boolean = false;

    ngOnChanges() {
        debugger;
        if (this.itemsID) {
            this.onSelect(this.itemsID);
        }
    }

    onBack(){
        this.back.emit();
    }

    items: Author[]= undefined;


    onDeleteItem(item: Author){
        //this.items = this.items.filter(res=>item.id!==res.id);
        this.openDialog(item.name);
    }

    openDialog(name: string): void {
        let dialogRef = this.dialog.open(DeleteTableDialog, {
            data: { text: name}
        });
    }

    onSelect(id: number) {
        let self = this;
        switch (id){
            case 1:
                self.getAuthor();
                break;
            case 2:
                self.getResearch();
            default:
                break;
        }

    }

    getResearch(){

    }
    getAuthor(){
        let self = this;
        self.service.getItemsAuthor()
            .then(res => {
                debugger;
                self.items = res.Author;
                debugger;
                    self.items.map(r => {
                        if (r.researches) {
                            r.researches_string = '';
                            r.researches.map(item => {
                                r.researches_string += item.name+',';
                            })
                        }
                    });
                debugger;
            })
    }

    onSelectCheckBox(){
        this.items.map(res=>{
            res.active = this.selectedTableCheck;
        })
    }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'delete.html',
})
export class DeleteTableDialog {

    constructor(
        public dialogRef: MdDialogRef<DeleteTableDialog>,
        @Inject(MD_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}


export declare module AuthorInter {

    export interface Report {
        code?: any;
        fileid?: any;
        id: any;
        name: string;
        year: number;
    }

    export interface Publication {
        id: any;
        name: string;
        published_at: number;
    }

    export interface Research2 {
        id: number;
        name: string;
        publication: Publication;
        knowledges: Knowledge[];
        report: Report;
    }

    export interface Author {
        id: any;
        link: string;
        name: string;
        researches_string: string;
        researches: Research2[];
        monument: Monument[];
        report: Report[];
        publications: Publication[];
        active: boolean;
        spatia: Spatial[];

    }

    export interface Research {
        author: Author;
    }

    export interface Knowledge {
        id: any;
        research: Research;
        description: string;
        name: string;
        site: Site;
    }

    export interface Monument{
        id: number;
        name: string;
    }

    export interface AuthorI {
        knowledges: Knowledge[];
    }

    export interface Type {
        id: number;
        ru_name: string;
    }

    export interface Spatial {
        date: any;
        type: Type;
        epoch: Epoch;
        x: number;
        y: number;
        name: string;
        id: number;
    }
    export interface Epoch{
        id: number;
        ru_name: string;
        en_name: string;
    }

    export interface Site {
        spatial: Spatial[];
        epoch: Epoch;
    }

}

