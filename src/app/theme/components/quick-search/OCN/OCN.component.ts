

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
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

  @Output() result = new EventEmitter<any>();

  getSearch() {
    let self = this;
    self.service.getSearchOCN(this.typeName, 'ru')
        .then(res => {
          debugger;
          self.result.emit(res);
        })
  }


}


