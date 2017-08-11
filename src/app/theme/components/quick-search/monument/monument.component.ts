

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../../services/search/search.service";


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
  bool: boolean = false;

  public typeName: string = '';

  public typeS: TypeSearch[];
  public typeSID: number;

  private typeSearch: TypeSearch[];
  private typeSearchID: number = 0;



  getSearch() {
    let self = this;
    self.service.getSearch(encodeURIComponent(self.typeName), self.typeEpochID, self.typeSearchID, 'ru')
        .then(res => {
        })
  }


}

export interface TypeSearch{
  id: number;
  name: string;
}

