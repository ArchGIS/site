

import {Component, OnChanges, OnInit} from "@angular/core";
import {control, latLng, tileLayer} from "leaflet";
import * as L from 'leaflet';
import 'leaflet.markercluster';
import zoom = control.zoom;
import 'leaflet-rastercoords'
import 'leaflet-easyprint'

@Component({
  templateUrl: `advanced-search.component.html`,
  styleUrls: ['advanced-search.component.scss'],
})

export class AdvancedSearchIComponent implements OnChanges{


  layers = [
    L.circle([ 46.95, -122 ], { radius: 5000 }),
    L.polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    L.marker([ 46.879966, -121.726909 ])
  ];

  layersEmpty= [ ];
  map: L.Map;


  ngOnChanges(){
    debugger;
  }

  // Open Street Map Definition
  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: false,
    layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Street Map'
    })
  };// Open Street Map Definition
  LAYER_OSM_Custom = {
    id: 'openstreetmapCustom',
    name: 'Open Street Map Custom',
    enabled: false,
    layer: L.tileLayer('./asd/{z}/{y}x{x}.png', {
      maxZoom: 6,
      attribution: 'Open Street Map'
    })
  };

  // Values to bind to Leaflet Directive
  layersControlOptions = { position: 'bottomright' };
  baseLayers = {
    'Open Street Map': this.LAYER_OSM.layer,
    'Open Street Map Custom': this.LAYER_OSM_Custom.layer,
  };
  options = {
    zoom: 3,
    center: L.latLng([ 46.879966, -121.726909 ])
  };

  // Marker cluster stuff
  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: any[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;

  // Generators for lat/lon values
  generateLat() { return Math.random() * 360 - 180; }
  generateLon() { return Math.random() * 180 - 90; }
  zoom: number = 18;

  ngOnInit() {



    var map = L.map('map').setView([0, 0], 4);
    L.easyPrint({
      title: 'My awesome print button',
      position: 'bottomright',
      sizeModes: ['A4Portrait', 'A4Landscape']
    }).addTo(map);
    let img = [
        17749,
        10009
    ];

   // var rc = new L.RasterCoords(map, img);



    L.tileLayer('./map/PGM_clip/{z}/{x}/{y}.png',{
      minZoom: 0,
      maxZoom: 7,
      continuousWorld: true,
      noWrap: true,
      attribution: '',
      tms: false
    }).addTo(map);
   /* var kmlLayer = new L.KML("mapperz-kml-example.kml", {async: true});

    kmlLayer.on("loaded", function(e) {
      map.fitBounds(e.target.getBounds());
    });

    map.addLayer(kmlLayer);*/
  }

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;

  }

  generateData() {

    const data: any[] = [];

    for (let i = 0; i < 10; i++) {

      const icon = L.icon({
        iconUrl: 'assets/icon/monTypes/monType1_1.png',
        shadowUrl: 'assets/icon/monTypes/monType1_1.png'
      });

      data.push(L.marker([ this.generateLon(), this.generateLat() ], { icon }));
    }

    this.markerClusterData = data;

  }
}
