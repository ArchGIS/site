

import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {SearchService} from "../../services/search/search.service";
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {MonumentInterface} from "../../model/quick-search";
import Monuments = MonumentInterface.Monuments;
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {circle, latLng, polygon, tileLayer} from "leaflet";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";


@Component({
  templateUrl: 'show.component.html',
  styleUrls: ['show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowIComponent {

  constructor(private service: SearchService,
              private activateRoute: ActivatedRoute) {
    let self = this;
    this.subscription = activateRoute.params.subscribe(params=> {
      this.id = params['id'];
      this.entities = params['entities'];
    });
    switch (this.entities){
      case 'author':
        this.entitiesID = 1;
        break;
      default:
        break;
    }
  }

  private entities: string;
  private entitiesID: number;
  private id: number;
  private subscription: Subscription;

  private typeEpochID: number = 0;
  bool: boolean = false;

  public typeName: string = '';

  public typeS: TypeSearch[];
  public typeSID: number = 1;

  public search: boolean = true;
  LAYER_OSM = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' });


  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
    },
    overlays: {
      'Big Circle': circle([46.95, -122], {radius: 5000}),
      'Big Square': polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
    }
  }
  options = {
    layers: [ this.LAYER_OSM ],
    zoom: 10,
    center: latLng(46.879966, -121.726909)
  };


}



export interface TypeSearch{
  id: number;
  name: string;
}


