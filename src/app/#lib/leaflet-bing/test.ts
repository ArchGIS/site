import * as L from 'leaflet';
import {YandexOptionsLeaflet} from "leaflet";

declare module 'leaflet' {
    namespace Yandex {

    }

    namespace tileLayer {
        function bing(options: YandexOptionsLeaflet): any;
    }

    export interface YandexOptionsLeaflet{
        minZoom: number,
        maxZoom: number,
        attribution: string,
        opacity: number,
        traffic: boolean
    }
    export interface PossibleShortMapTypes{
            schemaMap: string,
            satelliteMap: string,
            hybridMap: string,
            publicMap: string,
            publicMapInHybridView: string
    }
}