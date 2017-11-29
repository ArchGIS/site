

import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {SearchService} from "../../../services/search/search.service";
import Author = AuthorInter.AuthorI;

@Component({
  selector: 'table-data',
  templateUrl: 'table-data.component.html',
  styleUrls: ['table-data.component.scss'],
})
export class TableDataComponent implements OnChanges {

    constructor(private service: SearchService) {
    }

    @Input() itemsID: number;

    ngOnChanges() {
        debugger;
        if (this.itemsID) {
            this.onSelect(this.itemsID);
        }
    }

    items: Author = undefined;


    onSelect(id: number) {
        let self = this;
        self.service.getItemsAuthor()
            .then(res => {
                self.items = res.Site;
                if (self.items.knowledges)
                    self.items.knowledges.map(rr => {
                        if (rr.research) {
                            if (rr.research.author){
                                rr.research.author.researches_string = '';
                                rr.research.author.researches.map(item => {
                                    rr.research.author.researches_string += item.name;
                                })
                            }
                        }
                    });
                debugger;
            })
    }

}


declare module AuthorInter {

    export interface Research2 {
        name: string;
    }

    export interface Author {
        id: any;
        name: string;
        researches_string: string;
        researches: Research2[];
    }

    export interface Research {
        author: Author;
    }

    export interface Knowledge {
        research: Research;
    }

    export interface AuthorI {
        knowledges: Knowledge[];
    }

}

