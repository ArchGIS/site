
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import { QuickSearchRoutingModule} from "./quick-search-routing.module";
import { QuickSearchComponent} from "./quick-search.component";
import {QuickSearchIComponent} from "../../components/quick-search/quick-search.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import { LeafletModule } from "@asymmetrik/angular2-leaflet";
import {SearchService} from "../../services/search/search.service";
import {QuickSearchAuthorComponent} from "../../components/quick-search/author/author.component";
import {QuickSearchStudyComponent} from "../../components/quick-search/study/study.component";
import {QuickSearchReportComponent} from "../../components/quick-search/report/report.component";
import {QuickSearchRadiocarbonDatingComponent} from "../../components/quick-search/radiocarbon-dating/radiocarbon-dating.component";
import {QuickSearchOpeningComponent} from "../../components/quick-search/opening/opening.component";
import {QuickSearchOCNComponent} from "../../components/quick-search/OCN/OCN.component";
import {QuickSearchMonumentComponent} from "../../components/quick-search/monument/monument.component";
import {LeafletMarkerClusterModule} from "@asymmetrik/angular2-leaflet-markercluster";

const quickSearchComponent =[
  QuickSearchComponent,
  QuickSearchIComponent,
  QuickSearchAuthorComponent,
  QuickSearchStudyComponent,
  QuickSearchReportComponent,
  QuickSearchRadiocarbonDatingComponent,
  QuickSearchOpeningComponent,
  QuickSearchOCNComponent,
  QuickSearchMonumentComponent,
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
    LeafletModule.forRoot(),
    LeafletMarkerClusterModule,
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


