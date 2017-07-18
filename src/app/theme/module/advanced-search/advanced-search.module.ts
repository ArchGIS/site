
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
    AdvancedSearchRoutingModule
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


