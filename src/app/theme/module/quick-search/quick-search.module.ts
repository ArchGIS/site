
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import { QuickSearchRoutingModule} from "./quick-search-routing.module";
import {TranslateService} from "ng2-translate";
import { QuickSearchComponent} from "./quick-search.component";
import {QuickSearchIComponent} from "../../components/quick-search/quick-search.component";
import {TranslateModule} from "@ngx-translate/core";
import { LeafletModule } from "@asymmetrik/angular2-leaflet";
import {SearchService} from "../../services/search/search.service";

const quickSearchComponent =[
  QuickSearchComponent,
  QuickSearchIComponent
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
    QuickSearchRoutingModule,
    TranslateModule.forRoot(),
    LeafletModule
  ],
  declarations: [
    quickSearchComponent
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
export class  QuickSearchModule {}


