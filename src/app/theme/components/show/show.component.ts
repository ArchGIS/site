

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
    mapVerstovka;
    selectMap: number= 0;

    onCustomMap() {
        let self = this;
        debugger;
        var image = './assets/map/Verstovka_clip';
        var width = 17749;
        var height = 10009;
        var maxLevel = 9;
        var minLevel = 4;
        var orgLevel = 7;

        // Some weird calculations to fit the image to the initial position
        // Leaflet has some bugs there. The fitBounds method is not correct for large scale bounds
        var tileWidth = 256 * Math.pow(2, orgLevel);
        var radius = tileWidth / 2 / Math.PI;
        var rx = width - tileWidth / 2;
        var ry = -height + tileWidth / 2;

        var west = -180;
        var east = (180 / Math.PI) * (rx / radius);
        var north = 85.05;
        var south = (360 / Math.PI) * (Math.atan(Math.exp(ry / radius)) - (Math.PI / 4));
        var rc = (tileWidth / 2 + ry) / 2;
        var centerLat = (360 / Math.PI) * (Math.atan(Math.exp(rc / radius)) - (Math.PI / 4));
        var centerLon = (west + east) / 2;
        var bounds = [[south, west], [north, east]];
         L.CRS.Wall = L.extend({}, L.CRS.Simple, {
            transformation: new L.Transformation(55, 34868879985, 5.758860016636791, 54, 42786981175, 50, 37309762885),
        });
        self.mapVerstovka = new L.Map('map_Verstovka_clip', {
            maxBounds: bounds,
        });

        L.tileLayer(image + '/{z}-{x}-{y}.jpg', {
           crs: L.CRS.Wall,
            maxZoom: maxLevel,
            minZoom: minLevel,
            opacity: 1.0,
            zIndex: 1,
            noWrap: true,
            bounds: bounds,
            attribution: '<a href="https://github.com/oliverheilig/LeafletPano">LeafletPano</a>'
        }).addTo(self.mapVerstovka);


        var zoom = self.mapVerstovka.getBoundsZoom(bounds);
        var center = new L.latLng(centerLat, centerLon);

        self.mapVerstovka.setView(center, zoom);
    }

    onSelectMap(map: string){
        switch (map){
            case 'general':
                this.selectMap = 0;
                break;
            case 'Verstovka':
                this.selectMap = 1;
                break;
            case 'PGM':
                this.selectMap = 2;
                break;
        }
    }

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


        let image = './assets/map/Verstovka_clip';
        let width = 17749;
        let height = 10009;
        let maxLevel = 16;
        let minLevel = 0;
        let orgLevel = 7;

        // Some weird calculations to fit the image to the initial position
        // Leaflet has some bugs there. The fitBounds method is not correct for large scale bounds
        let tileWidth = 256 * Math.pow(2, orgLevel);
        let radius = tileWidth / 2 / Math.PI;
        let rx = width - tileWidth / 2;
        let ry = -height + tileWidth / 2;

        let west = -180;
        let east = (180 / Math.PI) * (rx / radius);
        let north = 85.05;
        let south = (360 / Math.PI) * (Math.atan(Math.exp(ry / radius)) - (Math.PI / 4));
        let rc = (tileWidth / 2 + ry) / 2;
        let centerLat = (360 / Math.PI) * (Math.atan(Math.exp(rc / radius)) - (Math.PI / 4));
        let centerLon = (west + east) / 2;
        let bounds = new L.LatLngBounds(
            new L.LatLng(54.4280310993334, 48.7781774812816),
            new L.LatLng(55.3486380722023, 50.3731024874584));
        // let bounds = [[south, west], [north, east]];

        let Custom = L.tileLayer(image + '/{z}-{x}-{y}.jpg', {
            minZoom: 7,
            maxZoom: 18,
            tms: true,
            opacity: 1.0,
            zIndex: 1,
            noWrap: true,
            continuousWorld: true,
            //tileSize: new L.Point( 17749, 10009),
            bounds: bounds,
            attribution: '<a href="https://github.com/oliverheilig/LeafletPano">LeafletPano</a>'

        });

        let CustomR = L.tileLayer(image + '/{z}-{x}-{y}.jpg', {
            minZoom: 7,
            maxZoom: 18,
            tms: true,
            opacity: 1.0,
            zIndex: 1,
            noWrap: true,
            continuousWorld: true,
            //tileSize: new L.Point( 17749, 10009),
            bounds: bounds,
            attribution: '<a href="https://github.com/oliverheilig/LeafletPano">LeafletPano</a>'

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

        let bingLayerAerialWithLabels = L.tileLayer.bing({bingMapsKey: BING_KEY, imagerySet: 'AerialWithLabels'});
        let bingLayerRoad = L.tileLayer.bing({bingMapsKey: BING_KEY, imagerySet: 'Road'});

        let baseMaps = {
            "OSM": tiles,
            "OSM Black": OpenStreetMap_BlackAndWhite,
            "Google": googleStreets,
            "Google Спутник": googleHybrid,
            "Verstovka": Custom,
            "PGM": CustomR,
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
                Custom,
                CustomR,
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
        self.onCustomMap()
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
        self.mapVerstovka(controlSearch)
        spatial.map(item => {

            let marker_url: string = 'assets/icon/monTypes/monType' + item.type.id + '_' + item.epoch.id + '.png';
            let title: string = `<a  onclick="window.open('${Consts.baseURLD}#/main/admin-panel/show/monument/${item.id}')">${item.name}</a>`;

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
        self.mapVerstovka.addLayer(markers);
        self.bool = true;
    }

    markerOnClick(e) {
        debugger;
    }

    onSelectMarker(id: number) {
        debugger;
        this.router.navigate(['/main', 'admin-panel', 'show', 'monument', id])
    }

}



export interface TypeSearch{
  id: number;
  name: string;
}

export class Point{
    constructor(x: number, y: number){}
    x: number;
    y: number;
}

