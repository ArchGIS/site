

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
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
  public typeYear: number;

  @Output() result = new EventEmitter<any>();

  getSearch() {
    let self = this;
    self.service.getSearchOpening(this.typeName, this.typeYear, '','ru',0, 10000)
        .then(res => {
          debugger;
          self.result.emit(res);
        })
  }


}


