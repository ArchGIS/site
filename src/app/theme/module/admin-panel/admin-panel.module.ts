
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {TranslateModule, TranslateService} from "ng2-translate";
import {AdminPanelIComponent} from "../../components/admin-panel/admin-panel.component";
import {AdminPanelComponent} from "./admin-panel.component";
import {FormAdminPanelComponent} from "../../components/admin-panel/form/form.component";
import {TableDataModule} from "../table-data/table-data.module";
import {SearchService} from "../../services/search/search.service";
import {ShowIComponent} from "../../components/show/show.component";
import {MonumentShowIComponent} from "../../components/show/monument/monument.component";
import {LeafletMarkerClusterModule} from "@asymmetrik/angular2-leaflet-markercluster";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {AuthorShowIComponent} from "../../components/show/author/author.component";
import {RouterModule} from "@angular/router";
import {LoadComponentComponent} from "../../components/#lib/load-component/load-component.component";
import {PreoladSpinner} from "../../services/preload/preolad.service";

const adminPanelComponent =[
  AdminPanelComponent,
  AdminPanelIComponent,
  FormAdminPanelComponent,
  ShowIComponent,
  MonumentShowIComponent,
  AuthorShowIComponent
];


const HTTP_CONST = [
  TokenService,
  ConstService,
  MainService,
];


const MODULE_CUSTOM = [
  TableDataModule,
  TranslateModule.forRoot()
];

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    RouterModule,
    JsonpModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    AdminPanelRoutingModule,
    MODULE_CUSTOM,
    LeafletModule.forRoot(),
    LeafletMarkerClusterModule,
  ],
  declarations: [
    adminPanelComponent
  ],

  providers: [
    HTTP_CONST,
      SearchService,
    PreoladSpinner
  ],
  entryComponents: [
  ],

  exports: []
})
export class AdminPanelModule {}


