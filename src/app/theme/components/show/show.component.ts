

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnChanges, OnInit} from "@angular/core";
import {SearchService} from "../../services/search/search.service";
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.polylinemeasure';
import 'leaflet-search';
import {MonumentInterface} from "../../model/quick-search";
import Monuments = MonumentInterface.Monuments;
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthorInter} from "../#lib/table-data/table-data.component";
import Spatial = AuthorInter.Spatial;
import {PlatformLocation} from "@angular/common";


@Component({
  templateUrl: 'show.component.html',
  styleUrls: ['show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowIComponent implements OnChanges, OnInit {

  constructor(private service: SearchService,
              public router: Router,
              private cdRef:ChangeDetectorRef,
              private platformLocation: PlatformLocation,
              private ngZone: NgZone,
              private activateRoute: ActivatedRoute) {
    let self = this;

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
        case 'excavation':
          this.entitiesID = 4;
          break;
        case 'artifact':
          this.entitiesID = 5;
          break;
        case 'culture':
          this.entitiesID = 6;
          break;
        case 'radiocarbon':
          this.entitiesID = 6;
          break;
        case 'publication':
          this.entitiesID = 7;
          break;
        default:
          break;
      }
    });


  }

  map;

  mapI()
  { var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
      }),
      latlng = L.latLng(55.798551, 49.106324);
    var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    var baseMaps = {
      "Grayscale": tiles,
      "Streets": OpenStreetMap_BlackAndWhite
    };


    this.map = L.map('map', {
      center: latlng,
      zoom: 3,
      layers: [tiles,OpenStreetMap_BlackAndWhite]
    });
    L.control.layers(baseMaps).addTo(this.map);

    L.control.scale({
      maxWidth: 240,
      metric: true,
      imperial: false,
      position: 'bottomleft'
    }).addTo(this.map);

    L.control.polylineMeasure({
      position: 'topleft',
      unit: 'metres',
      clearMeasurementsOnStop: false,
      showMeasurementsClearControl: true,
      showUnitControl: true
    }).addTo(this.map);

  }

  ngOnInit() {
    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
        }),
        latlng = L.latLng(55.798551, 49.106324);

    var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
    });

    let googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
    });

    let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
    })

    var baseMaps = {
      "OSM": tiles,
      "Google": googleStreets,
      "GoogleHybrid": googleHybrid,
      "GoogleSatellite": googleSat
    };


    this.map = L.map('map', {
      center: latlng,
      zoom: 3,
      layers: [tiles,OpenStreetMap_BlackAndWhite,googleStreets]
    });
    L.control.layers(baseMaps).addTo(this.map);

    L.control.scale({
      maxWidth: 240,
      metric: true,
      imperial: false,
      position: 'bottomleft'
    }).addTo(this.map);

    L.control.polylineMeasure({
      position: 'topleft',
      unit: 'metres',
      clearMeasurementsOnStop: false,
      showMeasurementsClearControl: true,
      showUnitControl: true
    }).addTo(this.map);


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
      case 'report':
        this.entitiesID = 4;
        break;
      case 'artifact':
        this.entitiesID = 5;
        break;
      case 'culture':
        this.entitiesID = 6;
        break;
      case 'radiocarbon':
        this.entitiesID = 6;
        break;
      case 'publication':
        this.entitiesID = 7;
        break;
      default:
        break;
    }
    this.mapI()
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
    let self =  this;
    let markers = L.markerClusterGroup();
    let marker;

    let controlSearch = new L.Control.Search({
      position: 'topleft',
      layer: markers,
      initial: false,
      zoom: 12,
      marker: false
    });

    this.map.addControl(controlSearch);
    spatial.map(item => {
      let title: string = item.name;
      let marker_url: string = 'assets/icon/monTypes/monType' + item.type.id + '_' + item.epoch.id + '.png';
      let html_title =
          `<p>${marker_url}</p>
            <p><a>${item.id}</a></p>`;

      marker = L.marker(new L.LatLng(item.x, item.y),
          { title: title ,
            clickable: true,
            icon: L.icon({
              iconUrl: marker_url,
              iconSize:[25, 25],
            })});
      marker.bindPopup(title);
      markers.addLayer(marker);

    });
    self.map.addLayer(markers);
    self.bool = true;
  }







}



export interface TypeSearch{
  id: number;
  name: string;
}


