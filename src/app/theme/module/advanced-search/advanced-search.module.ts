
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {AdvancedSearchRoutingModule} from "./advanced-search-routing.module";
import {TranslateModule, TranslateService} from "ng2-translate";
import {AdvancedSearchComponent} from "./advanced-search.component";
import {AdvancedSearchIComponent} from "../../components/advanced-search/advanced-search.component";
import {CriteriaIComponent} from "../../components/advanced-search/criteria/criteria.component";
import {LeafletModule} from "@asymmetrik/angular2-leaflet";
import {SearchService} from "../../services/search/search.service";

const advancedSearchComponent =[
  AdvancedSearchComponent,
  AdvancedSearchIComponent,
  CriteriaIComponent
];


const HTTP_CONST = [
  TokenService,
  ConstService,
  MainService,
];

const MODULE_CUSTOM = [
  TranslateModule.forRoot()
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
    LeafletModule,
    MODULE_CUSTOM
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


