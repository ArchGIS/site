

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {SearchService} from "../../../services/search/search.service";
import {SitesInterface} from "../quick-search.component";
import Sites = SitesInterface.Sites;


@Component({
  selector: 'quick-search-monument',
  templateUrl: 'monument.component.html',
  styleUrls: ['monument.component.scss'],
})

export class QuickSearchMonumentComponent {

  constructor(private service: SearchService) {
    let self = this;
    self.service.getEpoch('ru')
        .then(res => {
          self.typeEpoch = res.epochs;
        });
    self.service.getSiteTypes('ru')
        .then(res => {
          self.typeSearch = res.siteTypes;
        })
  }

  public typeEpoch: TypeSearch[];
  private typeEpochID: number = 0;

  public typeName: string = '';

  private typeSearch: TypeSearch[];
  private typeSearchID: number = 0;
  @Output() result = new EventEmitter<Sites>();



  getSearch() {
    let self = this;
    self.service.getSearch(encodeURIComponent(self.typeName), self.typeEpochID, self.typeSearchID, 'ru')
        .then(res => {
          debugger;
          self.result.emit(res);
        })
  }


}

export interface TypeSearch{
  id: number;
  name: string;
}

