

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../services/search/search.service";

@Component({
  selector: 'quick-search',
  templateUrl: 'quick-search.component.html',
  styleUrls: ['quick-search.component.scss'],
})

export class QuickSearchIComponent {

  constructor(private service: SearchService) {
    let self = this;
    self.typeS = [
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

  public typeS: TypeSearch[];
  public typeSID: number;

  private typeSearch: TypeSearch[];
  private typeSearchID: number = 0;

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

  // Fields for managing the form inputs and binding to leaflet zoom/center
  model = new LeafletCoreDemoModel(
      this.optionsSpec.center[0],
      this.optionsSpec.center[1],
      this.optionsSpec.zoom
  );
  zoom: number;
  center: L.LatLng;

  /*
   * This are the leaflet map options that we're going to use for input binding
   */

  options = {
    layers: this.optionsSpec.layers.map((l) => {
      return L.tileLayer(l.url, { maxZoom: l.maxZoom, attribution: l.attribution });
    }),
    zoom: this.optionsSpec.zoom,
    center: L.latLng({ lat: this.optionsSpec.center[0], lng: this.optionsSpec.center[1] })
  };

  fitBoundsOptions = {
    padding: 100,
    maxZoom: 10,
    animate: true,
    duration: 1
  };

  panOptions = {
    animate: true,
    duration: 1
  };

  zoomOptions = {
    animate: true,
    duration: 1
  };

  zoomPanOptions = {
    animate: true,
    duration: 1
  };

  onApply() {
    this.zoom = this.model.zoom;
    this.center = L.latLng([ this.model.latitude, this.model.longitude]);

    return false;
  }


  getSearch(){
    let self = this;
    debugger;
    self.service.getSearch(encodeURIComponent(self.typeName), self.typeEpochID, self.typeSearchID, 'ru')
        .then(res=>{
          debugger;
        })
  }


}

export interface TypeSearch{
  id: number;
  name: string;
}

export class LeafletCoreDemoModel {

  constructor(
      public latitude: number = 0,
      public longitude: number = 0,
      public zoom: number = 4,
      public zoomLevels: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]
  ) { }

}