

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../services/search/search.service";
import * as L from 'leaflet';


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
  bool: boolean = false;

  public typeName: string = '';

  public typeS: TypeSearch[];
  public typeSID: number;

  private typeSearch: TypeSearch[];
  private typeSearchID: number = 0;

  // Open Street Map and Open Cycle Map definitions
  LAYER_OCM = {
    id: 'opencyclemap',
    name: 'Open Cycle Map',
    enabled: true,
    layer: L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Cycle Map'
    })
  };
  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: false,
    layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Street Map'
    })
  };


  marker = {
    id: 'marker',
    name: 'Marker',
    enabled: true,
    layer: L.marker([46.879966, -121.726909], {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/icon/apple-icon.png',
        shadowUrl: '44a526eed258222515aa21eaffd14a96.png'
      })
    }),
  };


  // Form model object
  model:LeafletLayersDemoModel= new LeafletLayersDemoModel(
          [this.LAYER_OSM, this.LAYER_OCM],
          this.LAYER_OCM.id,
          [this.marker]
      );


  // Values to bind to Leaflet Directive
  layers: L.Layer[];
  layersControl: any;
  options = {
    zoom: 10,
    center: L.latLng([46.879966, -121.726909])
  };


  onApply() {

    // Get the active base layer
    let baseLayer = this.model.baseLayers.find((l) => {
      return l.id === this.model.baseLayer;
    });

    // Get all the active overlay layers
    let newLayers = this.model.overlayLayers
        .filter((l) => {
          return l.enabled;
        })
        .map((l) => {
          return l.layer;
        });
    newLayers.unshift(baseLayer.layer);

    this.layers = newLayers;
    this.layersControl = {
      baseLayers: {
        'Open Street Map': this.LAYER_OSM.layer,
        'Open Cycle Map': this.LAYER_OCM.layer
      },
      overlays: {
        Marker: this.marker.layer,
      }
    };

    return false;
  }


  getSearch() {
    let self = this;
    self.service.getSearch(encodeURIComponent(self.typeName), self.typeEpochID, self.typeSearchID, 'ru')
        .then(res => {
          self.model = new LeafletLayersDemoModel(
              [this.LAYER_OSM, this.LAYER_OCM],
              this.LAYER_OCM.id,
              [this.marker]
          );
          let marker;
          res.sites.map(item=>{
            let title: string = '';
            item.item.site_name.map(rr=>{
              title+=rr;
            })
            marker = {
              id: 'asd',
              name: 'Marker',
              enabled: true,
              layer: L.marker([item.coordinates.x, item.coordinates.y], {
                icon: L.icon({
                  iconSize: [25, 41],
                  iconAnchor: [13, 41],
                  iconUrl: 'assets/icon/apple-icon.png',
                  shadowUrl: '44a526eed258222515aa21eaffd14a96.png'
                }),
                title: title,
              }),
            };
            self.model.overlayLayers.push(marker)
          });
        self.onApply();
        self.bool = true;
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

export class LeafletLayersDemoModel {

  constructor(public baseLayers: {
                id: string,
                name: string,
                enabled: boolean,
                layer: L.Layer
              }[],
              public baseLayer: string,
              public overlayLayers: {
                id: string,
                name: string,
                enabled: boolean,
                layer: L.Layer
              }[] = []) {
  }

}


export declare module SitesInterface {

  export interface Item {
    site_name: string[];
    research_name: string[];
    epoch: string;
    type: string;
  }

  export interface Coordinates {
    date: number;
    x: number;
    y: number;
    type: string;
  }

  export interface Site {
    id: any;
    item: Item;
    coordinates: Coordinates;
  }

  export interface Sites {
    sites: Site[];
  }

}

