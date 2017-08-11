

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../../services/search/search.service";


@Component({
  selector: 'quick-search-study',
  templateUrl: 'study.component.html',
  styleUrls: ['study.component.scss'],
})

export class QuickSearchStudyComponent {

  constructor(private service: SearchService) {

  }



  public typeName: string = '';
  public typeYear: number = 0;




}



