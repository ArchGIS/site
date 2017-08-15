

import { Component, OnInit } from "@angular/core";
import { TypeSearch } from "../quick-search/quick-search.component";
import { SearchService } from "../../services/search/search.service";

@Component({
  templateUrl: `advanced-search.component.html`,
  styleUrls: ['advanced-search.component.scss'],
})

export class AdvancedSearchIComponent {

  constructor(private service: SearchService) {
    this.typeS = [
      {
        id: 1,
        name: 'Памятник',
      },
      {
        id: 2,
        name: 'Иследование',
      },
      {
        id: 3,
        name: 'Автор',
      }
    ];

    this.criteriaCount = [1];
    this.values = [];
  }

  public typeS: TypeSearch[];
  public criteriaCount: number[];
  public values: any[];

  addCriteria() {
    let num = this.criteriaCount.length + 1;
    this.criteriaCount.push(num);
  }

  getSearch() {
  }
}
