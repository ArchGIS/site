

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnChanges, OnInit} from "@angular/core";
import {SearchService} from "../../services/search/search.service";
declare var L:any;
import * as LM from 'leaflet';
import 'leaflet.polylinemeasure';
import 'leaflet-search';
import 'leaflet-rastercoords';
import 'leaflet-easyprint';
import '../../../#lib/leaflet-bing/leaflet-bing-layer'
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthorInter} from "../#lib/table-data/table-data.component";
import Spatial = AuthorInter.Spatial;
import {PlatformLocation} from "@angular/common";
import {Consts} from "../../../const/app-const";



@Component({
  templateUrl: 'show.component.html',
  styleUrls: ['show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowIComponent implements OnChanges, OnInit {

    constructor(private service: SearchService,
                public router: Router,
                private cdRef: ChangeDetectorRef,
                private platformLocation: PlatformLocation,
                private ngZone: NgZone,
                private activateRoute: ActivatedRoute) {
        let self = this;
        debugger;
        self.subscription = activateRoute.params.subscribe(params => {
            self.id = params['id'];
            debugger;
             if (self.map) {
                 self.map.off();
                 self.map.remove();
                 self.mapI();
             }
            switch (params['entities']) {
                case 'author':
                    self.entitiesID = 1;
                    break;
                case 'research':
                    self.entitiesID = 2;
                    break;
                case 'monument':
                    self.entitiesID = 3;
                    break;
                case 'report':
                    self.entitiesID = 4;
                    break;
                case 'excavation':
                    self.entitiesID = 5;
                    break;
                case 'artifact':
                    self.entitiesID = 6;
                    break;
                case 'publication':
                    self.entitiesID = 7;
                    break;
                case 'culture':
                    self.entitiesID = 0;
                    break;
                case 'radiocarbon':
                    self.entitiesID = 0;
                    break;
                default:
                    break;
            }
        });


    }

    map;

    mapI() {
        let self = this;
        let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
            }),
            latlng = L.latLng(55.798551, 49.106324);

        let OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });

        let googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });

        let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        });


        let Custom = L.tileLayer('./src/map/Verstovka_clip/{z}-{x}-{y}.png', {
            maxZoom: 7,
        });


        let World_Street_Map = L.tileLayer('https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            {
                subdomains: ['server', 'services'],
                maxZoom: 20
            });


        let yndx = L.tileLayer('https://vec{s}.maps.yandex.net/tiles?l=map&v=18.02.01-0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU',
            {
                maxZoom: 7,
            });
        let BING_KEY = 'AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L';

        let bingLayerAerialWithLabels  = L.tileLayer.bing({bingMapsKey: BING_KEY, imagerySet: 'AerialWithLabels'});
        let bingLayerRoad   = L.tileLayer.bing({bingMapsKey: BING_KEY, imagerySet: 'Road'});

        let baseMaps = {
            "OSM": tiles,
            "OSM Black": OpenStreetMap_BlackAndWhite,
            "Google": googleStreets,
            "Google Спутник": googleHybrid,
           // "Custom": Custom,
            "Bing Спутник": bingLayerAerialWithLabels,
            "Bing": bingLayerRoad,
            'Общая карта': World_Street_Map,
        };


        self.map = L.map('map', {
            center: latlng,
            zoom: 3,
            layers: [tiles,
                OpenStreetMap_BlackAndWhite,
                googleStreets,
                googleHybrid,
              //  Custom,
                bingLayerRoad,
                bingLayerAerialWithLabels,
                World_Street_Map]
        });
        L.control.layers(baseMaps).addTo(self.map);

        L.easyPrint({
            title: 'My awesome print button',
            position: 'bottomleft',
            sizeModes: ['A4Portrait', 'A4Landscape']
        }).addTo(self.map);

        L.control.scale({
            maxWidth: 240,
            metric: true,
            imperial: false,
            position: 'bottomleft'
        }).addTo(self.map);

        L.control.polylineMeasure({
            position: 'topleft',
            unit: 'metres',
            showBearings: true,
            clearMeasurementsOnStop: false,
            showMeasurementsClearControl: true,
            showUnitControl: true
        }).addTo(self.map);

    }

    ngOnInit() {
        let self = this;
        self.mapI();
    }


    ngOnChanges() {
        let self = this;
        self.subscription = this.activateRoute.params.subscribe(params => {
            self.id = params['id'];
            self.entities = params['entities'];
        });
        switch (self.entities) {
            case 'author':
                self.entitiesID = 1;
                break;
            case 'research':
                self.entitiesID = 2;
                break;
            case 'monument':
                self.entitiesID = 3;
                break;
            case 'report':
                self.entitiesID = 4;
                break;
            case 'excavation':
                self.entitiesID = 5;
                break;
            case 'artifact':
                self.entitiesID = 6;
                break;
            case 'publication':
                self.entitiesID = 7;
                break;
            case 'culture':
                self.entitiesID = 0;
                break;
            case 'radiocarbon':
                self.entitiesID = 0;
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


    onSpatial(spatial: Spatial[]) {
        let self = this;

        let markers = LM.markerClusterGroup();
        let marker;

        let controlSearch = new L.Control.Search({
            position: 'topleft',
            layer: markers,
            initial: false,
            zoom: 12,
            marker: false
        });

        self.map.addControl(controlSearch);
        spatial.map(item => {

            let marker_url: string = 'assets/icon/monTypes/monType' + item.type.id + '_' + item.epoch.id + '.png';
            let title: string =  `<a  onclick="window.open('${Consts.baseURLD}#/main/admin-panel/show/monument/${item.id}')">${item.name}</a>`;

            marker = L.marker(new L.LatLng(item.x, item.y),
                {
                    title: title,
                    clickable: true,
                    draggable: false,
                    icon: L.icon({
                        iconUrl: marker_url,
                        iconSize: [25, 25],
                    })
                }).on('click', this.markerOnClick);
            marker.bindPopup(title);
            markers.addLayer(marker);

        });
        self.map.addLayer(markers);
        self.bool = true;
    }

    markerOnClick(e){
        debugger;
    }

    onSelectMarker(id: number){
        debugger;
        this.router.navigate(['/main', 'admin-panel', 'show', 'monument', id])
    }

}



export interface TypeSearch{
  id: number;
  name: string;
}


