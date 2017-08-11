

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../../services/search/search.service";


@Component({
  selector: 'quick-search-opening',
  templateUrl: 'opening.component.html',
  styleUrls: ['opening.component.scss'],
})

export class QuickSearchOpeningComponent {

  constructor(private service: SearchService) {
    let self = this;
  }

  public typeName: string = '';
  public typeYear: number = 0;

  getSearch() {
    let self = this;
  }


}


