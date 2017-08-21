

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
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

  @Output() result = new EventEmitter<any>();

  getSearch() {
    let self = this;
    self.service.getSearchAuthor(this.typeName, 'ru')
        .then(res => {
          debugger;
          self.result.emit(res);
        })
  }


}


