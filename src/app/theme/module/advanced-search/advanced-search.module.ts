
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {SearchService} from "../../services/search/search.service";
import {AdvancedSearchRoutingModule} from "./advanced-search-routing.module";
import {AdvancedSearchComponent} from "./advanced-search.component";
import {AdvancedSearchIComponent} from "../../components/advanced-search/advanced-search.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {LeafletMarkerClusterModule} from "@asymmetrik/angular2-leaflet-markercluster";
import {LeafletModule} from "@asymmetrik/angular2-leaflet";
import {FormSearchCriteriaComponent} from "../../components/advanced-search/criteria/criteria.component";
import {FormSearchQueryComponent} from "../../components/advanced-search/query/query.component";

const advancedSearchComponent =[
  AdvancedSearchComponent,
  AdvancedSearchIComponent,
  FormSearchCriteriaComponent,
  FormSearchQueryComponent
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
    SearchService
  ],
  entryComponents: [
  ],

  exports: []
})
export class AdvancedSearchModule {}


