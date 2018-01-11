

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
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

  @Output() result = new EventEmitter<any>();

  getSearch() {
    let self = this;
    self.service.getSearchRadicarbonDating(this.typeName, 'ru',0, 10000)
        .then(res => {
          debugger;
          self.result.emit(res);
        })
  }


}


