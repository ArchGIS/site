

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
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

  @Output() result = new EventEmitter<any>();

  getSearch() {
    let self = this;
    self.service.getSearchStudy(this.typeName, this.typeYear, 'ru')
        .then(res => {
          debugger;
          self.result.emit(res);
        })
  }


}



