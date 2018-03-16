

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnChanges, OnInit, Input} from "@angular/core";
declare var L:any;
import * as LM from 'leaflet';
import 'leaflet.polylinemeasure';
import 'leaflet-search';
import 'leaflet-rastercoords';
import 'leaflet-easyprint';
import '../../../../../#lib/leaflet-bing/leaflet-bing-layer'
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import Spatial = AuthorInter.Spatial;
import {AuthorInter} from "../../../#lib/table-data/table-data.component";
import {Consts} from "../../../../../const/app-const";



@Component({
  template: `
      <div  style="    height: calc(100vh - 100px);; width:100%;"
            id="Verstovka_clip">
      </div>
  `,
  selector: 'verstovka-map'
})

export class VerstovkaComponent implements  OnInit {

    constructor(public router: Router) {
        let self = this;
        debugger;
        if (self.map) {
            self.map.off();
            self.map.remove();
            self.mapI();
        }
    }

    map = undefined;

    @Input() items: Spatial[];

    mapI() {
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
        self.map = new L.Map('Verstovka_clip', {
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
        }).addTo(self.map);


        var zoom = self.map.getBoundsZoom(bounds);
        var center = new L.latLng(centerLat, centerLon);

        self.map.setView(center, zoom);
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
        self.onSpatial(self.items)
    }

    ngOnInit() {
        let self = this;
        self.mapI();
    }
    bool: boolean = false;


    onSpatial(spatial: Spatial[]) {
        let self = this;
        debugger;
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
                }).on('click', self.markerOnClick);
            marker.bindPopup(title);
            markers.addLayer(marker);
        });
        self.map.addLayer(markers);
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

