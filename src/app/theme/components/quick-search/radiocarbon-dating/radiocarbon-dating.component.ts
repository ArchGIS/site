

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../../services/search/search.service";


@Component({
  selector: 'quick-search-radiocarbon-dating',
  templateUrl: 'radiocarbon-dating.component.html',
  styleUrls: ['radiocarbon-dating.component.scss'],
})

export class QuickSearchRadiocarbonDatingComponent {

  constructor(private service: SearchService) {
    let self = this;
  }

  public typeName: string = '';

  getSearch() {
    let self = this;
  }


}


