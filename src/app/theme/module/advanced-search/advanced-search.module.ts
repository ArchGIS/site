
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {AdvancedSearchRoutingModule} from "./advanced-search-routing.module";
import {TranslateService} from "ng2-translate";
import {AdvancedSearchComponent} from "./advanced-search.component";
import {AdvancedSearchIComponent} from "../../components/advanced-search/advanced-search.component";
import {TranslateModule} from "@ngx-translate/core";
import {LeafletMarkerClusterModule} from "@asymmetrik/angular2-leaflet-markercluster";
import {LeafletModule} from "@asymmetrik/angular2-leaflet";

const advancedSearchComponent =[
  AdvancedSearchComponent,
  AdvancedSearchIComponent
];


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
    MaterialModule,
    AdvancedSearchRoutingModule,
    TranslateModule.forRoot(),
    LeafletModule.forRoot(),
    LeafletMarkerClusterModule,
  ],
  declarations: [
    advancedSearchComponent
  ],

  providers: [
    HTTP_CONST,
    TranslateService,
  ],
  entryComponents: [
  ],

  exports: []
})
export class AdvancedSearchModule {}


