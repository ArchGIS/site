

import {Component, Input, OnInit} from "@angular/core";
import {SearchService} from "../../../services/search/search.service";

@Component({
  selector: 'table-data',
  templateUrl: 'table-data.component.html',
  styleUrls: ['table-data.component.scss'],
})
export class TableDataComponent {

    constructor(private service: SearchService) {
        this.service.getItems()
            .then(res=>{
                debugger;
            });
        this.items = ['asd','asd','zxc']
    }

    @Input() items: any;


}
