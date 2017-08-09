
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {TokenService} from "../../services/token/token.serviece";
import {ConstService} from "../../services/http/service-const.service";
import {MainService} from "../../services/main/main.service";
import {DataEntryRoutingModule} from "./data-entry-routing.module";
import {TranslateService} from "ng2-translate";
import {DataEntryComponent} from "./data-entry.component";
import {DataEntryIComponent} from "../../components/data-entry/data-entry.component";
import {TranslateModule} from "@ngx-translate/core";

const dataEntryComponent =[
  DataEntryComponent,
  DataEntryIComponent
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
    DataEntryRoutingModule,
    TranslateModule.forRoot()
  ],
  declarations: [
    dataEntryComponent
  ],

  providers: [
    HTTP_CONST,
    TranslateService,
  ],
  entryComponents: [
  ],

  exports: []
})
export class DataEntryModule {}


