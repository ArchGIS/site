

import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: 'quick-search.component.html',
  styleUrls: ['quick-search.component.scss'],
})

export class QuickSearchIComponent {

  constructor(){
    this.typeSearch = [
      {
        id: 1,
        name: 'Памятник',
      },
      {
        id: 2,
        name: 'Иследование',
      },
    ]
  }

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


}

export interface TypeSearch{
  id: number;
  name: string;
}