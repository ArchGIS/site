

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../services/search/search.service";

@Component({
  templateUrl: 'quick-search.component.html',
  styleUrls: ['quick-search.component.scss'],
})

export class QuickSearchIComponent {

  constructor(private service: SearchService){
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
      },
      {
        id: 4,
        name: 'Отчёт',
      },
      {
        id: 5,
        name: 'ОКН',
      },
      {
        id: 6,
        name: 'Вскрытие',
      },
      {
        id: 7,
        name: 'Радиоуглеродная датировка',
      },
    ];
    this.service.getEpoch('ru')
        .then(res=>{
          this.typeEpoch = res.epochs;
        });
    this.service.getSiteTypes('ru')
        .then(res=>{
          this.typeSearch = res.siteTypes;
        })
  }

  public typeEpoch: TypeSearch[];
  public typeName: string = '';

  public typeS: TypeSearch[];

  public typeSearch: TypeSearch[];

  optionsSpec: {
    layers: any[],
    zoom: number,
    center: number[]
  } = {
    layers: [
      {
        url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        maxZoom: 18,
        attribution: 'Open Cycle Map'
      },
      {
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        maxZoom: 18,
        attribution: 'Open Street Map'
      },
    ],
    zoom: 5,
    center: [ 46.879966, -121.726909 ]
  };

  options = {
    layers: this.optionsSpec.layers.map((l) => {
      return L.tileLayer(l.url, { maxZoom: l.maxZoom, attribution: l.attribution });
    }),
    zoom: this.optionsSpec.zoom,
    center: L.latLng({ lat: this.optionsSpec.center[0], lng: this.optionsSpec.center[1] })
  };


  getSearch(){
    //this.service.getSearch(this.typeName)
  }


}

export interface TypeSearch{
  id: number;
  name: string;
}