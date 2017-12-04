

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnChanges, OnInit} from "@angular/core";
import {SearchService} from "../../services/search/search.service";
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {MonumentInterface} from "../../model/quick-search";
import Monuments = MonumentInterface.Monuments;
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {circle, latLng, polygon, tileLayer} from "leaflet";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthorInter} from "../#lib/table-data/table-data.component";
import Spatial = AuthorInter.Spatial;
import {LeafletLayersDemoModel} from "../quick-search/quick-search.component";
import {PlatformLocation} from "@angular/common";


@Component({
  templateUrl: 'show.component.html',
  styleUrls: ['show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowIComponent implements OnChanges {

  constructor(private service: SearchService,
              public router: Router,
              private cdRef:ChangeDetectorRef,
              private platformLocation: PlatformLocation,
              private ngZone: NgZone,
              private activateRoute: ActivatedRoute) {
    let self = this;

    router.events.subscribe((val) => {

      console.log(val instanceof NavigationEnd)
    });

    platformLocation.onPopState(() => {
      debugger;
      if(platformLocation.pathname.startsWith("/currentRoute")) {
        this.ngZone.run(() => {
          debugger;
          console.log("Reloading component");
        });
      }
    });
    this.subscription = activateRoute.params.subscribe(params=> {
      this.id = params['id'];
      switch (params['entities']) {
        case 'author':
          this.entitiesID = 1;
          break;
        case 'research':
          this.entitiesID = 2;
          break;
        case 'monument':
          this.entitiesID = 3;
          break;
        default:
          break;
      }
    });

    this.markerClusterOptions = <L.MarkerClusterGroupOptions>{
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true,
      spiderfyOnMaxZoom: true,
      animate: true,
      animateAddingMarkers: true,
      removeOutsideVisibleBounds: true,
      chunkedLoading: true
    };
  }

  ngOnChanges() {
    this.subscription = this.activateRoute.params.subscribe(params=> {
      this.id = params['id'];
      this.entities = params['entities'];
    });
    switch (this.entities) {
      case 'author':
        this.entitiesID = 1;
        break;
      case 'research':
        this.entitiesID = 2;
        break;
      case 'monument':
        this.entitiesID = 3;
        break;
      default:
        break;
    }
  }

  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: any[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;

  markerClusterReady(group: L.MarkerClusterGroup) {

    this.markerClusterGroup = group;

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



  onSpatial(spatial: Spatial[]){
    let self = this;
    self.model = new LeafletLayersDemoModel(
        [this.LAYER_OSM, this.LAYER_OCM],
        this.LAYER_OCM.id,
        [this.marker]
    );
    let marker;
    spatial.map(item => {
      let title: string = item.name;
      let marker_url: string = 'assets/icon/monTypes/monType' + item.type.id + '_' + item.epoch.id + '.png';
      marker = {
        id: 'asd',
        name: 'Marker',
        enabled: true,
        layer: L.marker([item.x, item.y], {
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
    self.onApply();
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


  onMonument(event: Spatial[]): void {

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
  }


}



export interface TypeSearch{
  id: number;
  name: string;
}


