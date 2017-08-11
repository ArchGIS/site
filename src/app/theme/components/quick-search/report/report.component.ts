

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../../services/search/search.service";


@Component({
  selector: 'quick-search-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.scss'],
})

export class QuickSearchReportComponent {

  constructor(private service: SearchService) {
  }

  public typeName: string = '';
  public typeYear: number =  0;


  getSearch() {
  }


}


