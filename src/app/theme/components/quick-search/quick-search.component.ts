

import { Component, OnInit } from "@angular/core";
import {SearchService} from "../../services/search/search.service";
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {MonumentInterface} from "../../model/quick-search";
import Monuments = MonumentInterface.Monuments;
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";


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
    this.markerClusterOptions = <L.MarkerClusterGroupOptions>{
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true,
      spiderfyOnMaxZoom: true,
      animate: true,
      animateAddingMarkers: true,
      removeOutsideVisibleBounds: true,
      chunkedLoading: true
    }
  }

  private typeEpochID: number = 0;
  bool: boolean = false;

  public typeName: string = '';

  public typeS: TypeSearch[];
  public typeSID: number = 1;

  public search: boolean = true;
  public table: string[] = [];
  private epochS: string[]= ['Новое время', 'Средневековье', "Эпоха Великого перенаселения", "Ранний железный век",
      "Эпоха палеометалла", "Неолит", "Палеолит/Мезолит", "Не определена"];
  private type: string[] = ['Укрепленное поселение (городище)', 'Неукрепленное поселение (стоянка/селище)',
  'Местонахождение', 'Грунтовый могильник','Курганный могильник','Производственный',
  'Комплексный','Памятник архитектуры','Надгробие','Святилище (жертвенное место)',
  'Клад', 'Не задано'];


  onMonument(event: Monuments): void {
    let self = this;
      self.table = [];
      event.sites.map(item => {
          let title: string = '';
          if (item.site_names) {
              item.site_names.map(rr => {
                  title += rr;
              });
          }
          self.table.push(title);
      });
   /* self.model = new LeafletLayersDemoModel(
        [this.LAYER_OSM, this.LAYER_OCM],
        this.LAYER_OCM.id,
        [this.marker]
    );
    let marker;
    self.table = [];
    event.sites.map(item => {
      let title: string = '';
      debugger;
      if (item.item.site_names){
          item.item.site_names.map(rr => {
              title += rr;
          });
      }
      let epoch: string = self.epochS[item.item.epoch - 1];
      let type: string = self.type[item.item.type - 1];
      self.table.push(`${title} (${epoch}, ${type})`);
      let marker_url: string = 'assets/icon/monTypes/monType' + item.item.type + '_' + item.item.epoch + '.png';
      marker = {
        id: 'asd',
        name: 'Marker',
        enabled: true,
        layer: L.marker([item.coordinates.x, item.coordinates.y], {
          icon: L.icon({
            iconSize: [25, 25],
            iconAnchor: [25, 25],
            iconUrl: marker_url,
          }),
          title: title,
          clickable: true
        }),
      };
      self.model.overlayLayers.push(marker)
    });
    self.bool = true;
    self.onApply();*/
  }


  onResult(event: any, type: number){
    let self = this;
    debugger;
    switch (type){
      case 1:
          self.onMonument(event);
          self.search = false;
          self.bool = true;
    }
  }



  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: any[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;

  markerClusterReady(group: L.MarkerClusterGroup) {

    this.markerClusterGroup = group;

  }


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

  baseLayers = {
    'Open Street Map': this.LAYER_OSM.layer
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
      })
    }),
  };


  // Form model object
  model:LeafletLayersDemoModel= new LeafletLayersDemoModel(
          [this.LAYER_OSM, this.LAYER_OCM],
          this.LAYER_OCM.id,
          []
      );


  // Values to bind to Leaflet Directive
  layers: L.Layer[];
  layersControl: any;
  options = {
    zoom: 3,
    center: L.latLng([55.798551, 49.106324])
  };


  reset(): void{
    this.search = true;
    this.bool = false;
    this.table = [];
  }


  onApply(): void {
    let self = this;
    // Get the active base layer
    let data: any[] = [];
    self.model.overlayLayers.map(item=>{
     data.push(item.layer);
    });
    self.search = false;
    self.markerClusterData = data;
  }


}



export interface TypeSearch{
  id: number;
  name: string;
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

