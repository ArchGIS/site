

import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'table-data',
  templateUrl: 'table-data.component.html',
  styleUrls: ['table-data.component.scss'],
})
export class TableDataComponent {

    constructor() {
        this.items = ['asd','asd','zxc']
    }

    @Input() items: any;


}
