

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../../services/search/search.service";


@Component({
  selector: 'quick-search-author',
  templateUrl: 'author.component.html',
  styleUrls: ['author.component.scss'],
})

export class QuickSearchAuthorComponent {

  constructor(private service: SearchService) {
  }

  public typeName: string = '';

  getSearch() {
  }


}


