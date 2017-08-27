

import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {SearchService} from "../../../services/search/search.service";
import Monuments = MonumentInterface.Monuments;
import {MonumentInterface} from "../../../model/quick-search";


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
  @Output() result = new EventEmitter<Monuments>();



  getSearch() {
    let self = this;
    self.service.getSearchMonument(encodeURIComponent(self.typeName), self.typeEpochID, self.typeSearchID, 'ru')
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

