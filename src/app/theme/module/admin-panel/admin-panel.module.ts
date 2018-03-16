
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {AdminPanelIComponent} from "../../components/admin-panel/admin-panel.component";
import {AdminPanelComponent} from "./admin-panel.component";
import {FormAdminPanelComponent} from "../../components/admin-panel/form/form.component";
import {TableDataModule} from "../table-data/table-data.module";
import {SearchService} from "../../services/search/search.service";
import {ShowIComponent} from "../../components/show/show.component";
import {MonumentShowIComponent} from "../../components/show/monument/monument.component";
import {LeafletMarkerClusterModule} from "@asymmetrik/angular2-leaflet-markercluster";
import {AuthorShowIComponent} from "../../components/show/author/author.component";
import {RouterModule} from "@angular/router";
import {LoadComponentComponent} from "../../components/#lib/load-component/load-component.component";
import {PreoladSpinner} from "../../services/preload/preolad.service";
import {AddItemShowIComponent} from "../../components/show/ItemAdd/ItemAdd.component";
import {LeafletModule} from "@asymmetrik/angular2-leaflet";
import {ResearchShowIComponent} from "../../components/show/research/research.component";
import {ItemMonumentShowIComponent} from "../../components/show/monument/item/item-monument.component";
import {ArtifactShowIComponent} from "../../components/show/artifact/artifact.component";
import {ExcavationShowIComponent} from "../../components/show/excavation/excavation.component";
import {TranslateModule} from "@ngx-translate/core";
import {ItemResearchShowIComponent} from "../../components/show/research/item/item-research.component";
import {ReportShowIComponent} from "../../components/show/report/report.component";
import {ImageUploadModule} from "../../components/#lib/ng2-image-upload-master/src/image-upload.module";
import {PublicationShowIComponent} from "../../components/show/publication/publication.component";
import {GeneralMapComponent} from "../../components/show/map/general/general-map.component";
import {VerstovkaComponent} from "../../components/show/map/Verstovka/verstovka.component";
import {RadiocarbonComponent} from "../../components/show/radiocarbon/radiocarbon.component";

const adminPanelComponent =[
    GeneralMapComponent,
    VerstovkaComponent,
  AdminPanelComponent,
  AdminPanelIComponent,
  FormAdminPanelComponent,
  ShowIComponent,
  MonumentShowIComponent,
  AuthorShowIComponent,
  AddItemShowIComponent,
  ResearchShowIComponent,
  ItemMonumentShowIComponent,
  ArtifactShowIComponent,
  ExcavationShowIComponent,
  ItemResearchShowIComponent,
  ReportShowIComponent,
    PublicationShowIComponent,
    RadiocarbonComponent
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
    ImageUploadModule.forRoot(),
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


