
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {DataDownlandRoutingModule} from "./data-download-routing.module";
import {TranslateService} from "ng2-translate";
import {DataDownlandComponent} from "./data-download.component";
import {DataDownloadIComponent} from "../../components/data-download/data-download.component";
import {TranslateModule} from "@ngx-translate/core";

const dataDownlandComponent =[
  DataDownlandComponent,
  DataDownloadIComponent
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
    DataDownlandRoutingModule,
    TranslateModule.forRoot()
  ],
  declarations: [
    dataDownlandComponent
  ],

  providers: [
    HTTP_CONST,
    TranslateService,
  ],
  entryComponents: [
  ],

  exports: []
})
export class DataDownlandModule {}


