import * as L from 'leaflet';

 declare module 'leaflet' {
    namespace TileLayer {
        interface bing extends Control {
            new (options: BingOptionsLeaflet): any;
        }



    }

    namespace tileLayer {
        function bing(options: BingOptionsLeaflet): any;
    }

    export interface BingOptionsLeaflet{
        bingMapsKey: string,
        imagerySet: string,

    }
}