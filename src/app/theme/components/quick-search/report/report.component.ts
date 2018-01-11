

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
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
  public typeYear: number ;


  @Output() result = new EventEmitter<any>();

  getSearch() {
    let self = this;
    self.service.getSearchReport(this.typeName, this.typeYear, 'ru',0, 10000)
        .then(res => {
          debugger;
          self.result.emit(res);
        })
  }


}


