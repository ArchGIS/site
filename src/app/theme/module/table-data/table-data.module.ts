/**
 * Created by nardm on 19.07.17.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {DeleteTableDialog, TableDataComponent} from "../../components/#lib/table-data/table-data.component";
import {SearchService} from "../../services/search/search.service";
import {MainService} from "../../services/main/main.service";
import {ConstService} from "../../services/http/service-const.service";
import {TokenService} from "../../services/token/token.serviece";
import {RouterModule} from "@angular/router";
import {LoadComponentComponent} from "../../components/#lib/load-component/load-component.component";
import {TableDataRoutingModule} from "./table-data-routing.module";
import {LeafletMarkerClusterModule} from "@asymmetrik/angular2-leaflet-markercluster";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";


const HTTP_CONST = [
    TokenService,
    ConstService,
    MainService,
];

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        MaterialModule,
        TableDataRoutingModule,
        LeafletModule.forRoot(),
        LeafletMarkerClusterModule,
    ],
    declarations: [
        TableDataComponent,
        LoadComponentComponent,
        DeleteTableDialog
    ],

    providers: [
        HTTP_CONST,
        SearchService
    ],
    entryComponents: [
    ],

    exports: [
        TableDataComponent
    ]
})
export class TableDataModule {}


