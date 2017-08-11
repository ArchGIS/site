

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../../services/search/search.service";


@Component({
  selector: 'quick-search-OCN',
  templateUrl: 'OCN.component.html',
  styleUrls: ['OCN.component.scss'],
})

export class QuickSearchOCNComponent {

  constructor(private service: SearchService) {
  }

  public typeName: string = '';

  getSearch() {
    let self = this;
  }


}


