

import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output} from "@angular/core";
import {SearchService} from "../../../services/search/search.service";
import AuthorI = AuthorInter.AuthorI;
import Knowledge = AuthorInter.Knowledge;
import Author = AuthorInter.Author;
import {PreoladSpinner} from "../../../services/preload/preolad.service";
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from "@angular/material";
import Research = AuthorInter.Research;

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
    research: Research[]= undefined;


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

    getResearch() {
        let self = this;
        self.service.getResearches()
            .then(res => {
                debugger;
                self.research = res.Research;
                self.research.map(rr => {
                    rr.report_string = '';
                    if (rr.report) {
                        rr.report_string = rr.report.name;
                    }
                })
            })
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
        spatia: Spatial[];
        researches: Research[];
    }

    export interface Publication {
        id: any;
        name: string;
        published_at: number;
        spatia: Spatial[];
        researches: Research[]
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

    export interface Type2 {
        id: number;
        ru_name: string;
    }

    export interface Research {
        author: Author;
        coauthors: Author[];
        description: string;
        excavations: Excavation[];
        id: number;
        knowledges: Knowledge[];
        name: string;
        publication: Publication;
        radiocarbons: Radiocarbon[];
        report: Report;
        report_string: string;
        type: Type2;
        year: number;
        active: boolean;
        spatia: Spatial[];
        monument: Monument[];
        heritages: Heritage[];
        artifacts: Artifact[];
        cultures: Culture[];
    }

    export interface Excavation {
        area: number;
        artifacts: Artifact[];
        boss: string;
        id: number;
        name: string;
        spatia: Spatial[];
        monument: Monument[];
        radiocarbons: Radiocarbon[];
        report: Report[];
        researches: Research[];
        sites: Site;
    }

    export interface Knowledge {
        id: any;
        research: Research;
        description: string;
        name: string;
        active: boolean;
        site: Site;
        artifacts_count: number;
        excavations_count: number;
        culture: Culture;
    }

    export interface Radiocarbon {
        bcadSecondBot: number;
        bcadSecondTop: number;
        date: number;
        id: number;
        name: string;
        s: number;
        sampleDesc: string;
    }

    export interface Monument{
        id: number;
        name: string;
        active: boolean;
        epoch: Epoch;
        artifacts_count: number;
        knowledge: Knowledge;
        knowledges: Knowledge[];
        knowledge_count: number;
        excavations: Excavation[];
        spatia: Spatial[];
        spatial: Spatial[];
        monument: Monument[];
        heritages: Heritage[];
        artifacts: Artifact[];
        cultures: Culture[];
        radiocarbons: Radiocarbon[];
        report?: Report[];
    }

    export interface AuthorI {
        knowledges: Knowledge[];
    }

    export interface Type {
        id: number;
        ru_name: string;
    }

    export interface Culture {
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

    export interface Artifact {
        depth: string;
        excRegion: string;
        id: any;
        name: string;
        spatia: Spatial[];
        excavation: Excavation;
    }

    export interface Epoch{
        id: number;
        ru_name: string;
        en_name: string;
    }

    export interface Site {
        spatial: Spatial[];
        epoch: Epoch;
        heritages: Heritage[];
    }

    export interface Heritage{
        id: number;
        name: string;
    }

}

