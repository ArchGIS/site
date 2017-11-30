

import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {SearchService} from "../../../services/search/search.service";
import AuthorI = AuthorInter.AuthorI;
import Knowledge = AuthorInter.Knowledge;

@Component({
  selector: 'table-data',
  templateUrl: 'table-data.component.html',
  styleUrls: ['table-data.component.scss'],
})
export class TableDataComponent implements OnChanges {


    constructor(private service: SearchService) {
    }

    @Input() itemsID: number;
    @Input() textSearch: string;

    ngOnChanges() {
        debugger;
        if (this.itemsID) {
            this.onSelect(this.itemsID);
        }
    }

    items: AuthorI[] = undefined;


    onSelect(id: number) {
        let self = this;
        self.service.getItemsAuthor()
            .then(res => {
                self.items = res.Site;
                debugger;
                let temp: AuthorI[] = [];
                for (let i = 1; i < 20; i++) {
                    temp.push(self.items[i]);
                }
                self.items = temp;
                console.log(temp);
                debugger;
                self.items.map(rr => {
                    if (rr.knowledges.length!==0){
                        rr.knowledges.map(r => {
                            if (r.research !== undefined) {
                                if (r.research.author !== undefined&&r.research.author !== null) {
                                    if (r.research.author.researches) {
                                        r.research.author.researches_string = '';
                                        r.research.author.researches.map(item => {
                                            r.research.author.researches_string += item.name;
                                        })
                                    }
                                }
                            }
                        })
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

